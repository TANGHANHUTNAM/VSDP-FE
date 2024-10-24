// fixed hear
// customized filter panel
// pagination

import React, { useRef, useState } from "react";

import { BorderOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table } from "antd";
import Highlighter from "react-highlight-words";
import data from "./CVData.json";

const ListCV = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        className="border-1 absolute right-[-70%] top-0 rounded-md bg-white p-3 shadow-sm shadow-gray-300 lg:right-[-2%]"
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1677ff" : "Black",
          fontSize: 16,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: "STT",
      dataIndex: "STT",
      key: "STT",
      width: 20,
      align: "center",
      responsive: ["sm"],
    },
    {
      title: "Họ",
      dataIndex: "Ho",
      key: "Ho",
    },
    {
      title: "Tên",
      dataIndex: "Ten",
      key: "Ten",
      width: 20,
      align: "center",
    },
    {
      title: "MSSV",
      dataIndex: "MSSV",
      key: "MSSV",
      width: "10%",
      align: "center",
      ...getColumnSearchProps("MSSV"),
    },
    {
      title: "Trường",
      dataIndex: "Truong",
      key: "Truong",

      filters: [
        {
          text: "Đại học Nông lâm - Đại học Huế",
          value: "Đại học Nông lâm - Đại học Huế",
        },
        {
          text: "Đại học Kinh tế - Đại học Huế",
          value: "Đại học Kinh tế - Đại học Huế",
        },
        {
          text: "Đại học Khoa học - Đại học Huế",
          value: "Đại học Khoa học - Đại học Huế",
        },
        {
          text: "Đại học Kinh tế TP. HCM",
          value: "Đại học Kinh tế TP.HCM",
        },
        {
          text: "Đại học Khoa học Tự nhiên",
          value: "Đại học Khoa học Tự Nhiên",
        },
        {
          text: "Đại học Khoa học Xã hội và Nhân văn",
          value: "Đại học Khoa học xã hội và Nhân Văn",
        },
        {
          text: "Đại học Cần Thơ",
          value: "Đại học Cần Thơ",
        },
        {
          text: "Sinh viên Metrit",
          value: "Sinh viên đến từ chương trình Merit Huế/Sài Gòn",
        },
      ],
      onFilter: (value, record) => record.Truong.includes(value),
    },
    {
      title: "Ngành",
      dataIndex: "Nganh",
      key: "Nganh",
    },
  ];
  // chinh background cho phan header table
  const components = {
    header: {
      cell: (props) => (
        <th
          {...props}
          style={{
            backgroundColor: "rgb(206, 206, 206)",
            color: "rgb(0, 0, 0)",
            fontWeight: "bold",
          }}
        >
          {props.children}
        </th>
      ),
    },
  };

  return (
    <div className="flex justify-center">
      <Table
        className="relative float-none mb-4 w-auto border-b-slate-700 text-sm md:w-[1228px]"
        bordered
        size="small"
        columns={columns}
        dataSource={data}
        pagination={{
          position: ["bottomCenter"],
        }}
        components={components}
      />
    </div>
  );
};
export default ListCV;
