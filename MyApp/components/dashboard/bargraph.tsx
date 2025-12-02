import React, {useEffect, useState} from 'react';
import { BarChart, Bar , XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import { DataTable } from 'react-native-paper';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
//screens for seller dashboard with bar graph and table showing top selling products analytics
interface AnalyticsItem{
    product_id: number;
    product_name:string;
    total_quantity:number;
    total_revenue:number;
}
const SellerDashboard: React.FC = () => {
    const [analyticsdata, setanalyticsData] = useState<AnalyticsItem[]>([]);
    useEffect(() => {
        const fetchAnalyticsData = async () => {
            try {
                const response = await axios.get<AnalyticsItem[]>('http://localhost:5000/analytics/top-products');
                setanalyticsData(response.data);
                console.log('Fetched analytics data:', response.data);
            } catch (error) {
                console.error('Error fetching analytics data:', error);
            }
        };
        fetchAnalyticsData();
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Top Selling Products Analytics</Text>
        <View style={{ height: '100%', height:400 }} >
        <ResponsiveContainer width="100%" height={400}>
            <BarChart
                //passing the data into the barchart
                data={analyticsdata}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
                <XAxis dataKey="product_name" />
                <YAxis />   
                <Tooltip />
                <Legend />
                <Bar dataKey="total_quantity" fill="#8884d8" name="Total Quantity Sold" />
                <Bar dataKey="total_revenue" fill="#82ca9d" name="Total Revenue" />
            </BarChart>
        </ResponsiveContainer>
        </View>
        <View style={{ height: 20}} />

        {/* Table to display the analytics data */}
        <DataTable>
            <DataTable.Header>
                <DataTable.Title>Product Name</DataTable.Title>
                <DataTable.Title numeric>Total Quantity Sold</DataTable.Title>
                <DataTable.Title numeric>Total Revenue</DataTable.Title>
            </DataTable.Header> 
            {analyticsdata.map((item, index) => (
                <DataTable.Row key={index}>
                    <DataTable.Cell>{item.product_name}</DataTable.Cell>
                    <DataTable.Cell numeric>{item.total_quantity}</DataTable.Cell>
                    <DataTable.Cell numeric>${Number(item.total_revenue).toFixed(2)}</DataTable.Cell>   
                </DataTable.Row>
            ))}
        </DataTable>  
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:10,
        backgroundColor:'#f5f5f5',
    },
    title: {
        fontSize:20,
        fontWeight:'bold',
        marginVertical:10,
        textAlign:'center',
    },
});
export default SellerDashboard;