import  React from 'react';
import { DataTable } from 'react-native-paper';
import {Table, Row, Rows } from 'react-native-table-component';
import { StyleSheet, Text, ScrollView, View } from 'react-native';

export default function OrdersTable({ data }) {
    const dummyData = [
    { item: 'Apples', quantity: 10, orderId: 'ORD-001', total: 45.99 },
    { item: 'Bananas', quantity: 5, orderId: 'ORD-002', total: 12.50 },
    { item: 'Oranges', quantity: 7, orderId: 'ORD-003', total: 22.30 },
    { item: 'Pineapple', quantity: 2, orderId: 'ORD-004', total: 15.75 },
  ];
  
   const source = data?.length ? data : dummyData;

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Item</DataTable.Title>
        <DataTable.Title numeric>Qty</DataTable.Title>
        <DataTable.Title>Order ID</DataTable.Title>
        <DataTable.Title numeric>Total</DataTable.Title>
      </DataTable.Header>

      {source.map((row, index) => (
        <DataTable.Row key={index}>
          <DataTable.Cell>{row.item}</DataTable.Cell>
          <DataTable.Cell numeric>{row.quantity}</DataTable.Cell>
          <DataTable.Cell>{row.orderId}</DataTable.Cell>
          <DataTable.Cell numeric>${row.total}</DataTable.Cell>
        </DataTable.Row>
      ))}

      <DataTable.Pagination
        page={0}
        numberOfPages={1}
        onPageChange={() => {}}
        label="1 of 1"
      />
    </DataTable>
)};
  const styles = StyleSheet.create({
    card: {
        backgroundColor: '#2d2d2d',
        padding: 15,
        borderRadius: 8,
        margin: 10,

    },
    table:{
        backgroundColor: '#f8f9fc',
        borderRadius:12,
        overflow:'hidden'

    },
    header:{
        backgroundColor:'#4f46e5'

    },
    headerText:{
        color:'white',
        fontWeight:'600'
    },
    row:{
        backgroundColor:'#ffffff',
        borderBottomWidth:1,
        borderColor:'#eee',
    },
});