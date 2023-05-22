import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_CONTINENTS } from "../graphql/queries";
import { Table, Typography } from "antd";
import AppLayout from "../components/AppLayout";

const ContinentsPage: React.FC = () => {
  const { loading, error, data } = useQuery(GET_CONTINENTS);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const columns = [
    {
      dataIndex: "name",
      key: "name",
      render: (text: string, data: any) => (
        <Link to={`/continents/${data.name}`}>{text}</Link>
      ),
    },
  ];
  return (
    <AppLayout>
      <Typography.Title level={1}>Continents</Typography.Title>

      <Table
        columns={columns}
        dataSource={data.continents}
        pagination={false}
        rowKey={(data) => data.name}
      />
    </AppLayout>
  );
};

export default ContinentsPage;
