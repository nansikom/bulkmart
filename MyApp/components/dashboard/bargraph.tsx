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
        <View style={styles.TableBorder} >
        <DataTable>
            <DataTable.Header style={{backgroundColor:'#5440b8ff'}}>
                <DataTable.Title>
              <Text style={styles.headerTitle}>Product Name</Text>  </DataTable.Title>
                <DataTable.Title numeric>
              <Text style={styles.headerTitle}>Total Quantity Sold</Text>  </DataTable.Title>
                <DataTable.Title numeric>
              <Text style={styles.headerTitle}>Total Revenue</Text>  </DataTable.Title>
            </DataTable.Header> 
            {analyticsdata.map((item, index) => (
                //mapping to extract each item from the analytics data based off their names in the analytics data.
                <DataTable.Row key={index}>
                    <DataTable.Cell>{item.product_name}</DataTable.Cell>
                    <DataTable.Cell numeric>{item.total_quantity}</DataTable.Cell>
                    <DataTable.Cell numeric>${Number(item.total_revenue).toFixed(2)}</DataTable.Cell>   
                </DataTable.Row>
            ))}
        </DataTable>  
        </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:10,
        backgroundColor:'white',
    },
    title: {
        fontSize:20,
        fontWeight:'bold',
        marginVertical:10,
        textAlign:'center',
    },
    headerTitle:{
        color:'black',
        fontWeight:'bold',
    },
    TableBorder:{
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 8,
        overflow: 'hidden',
    }
});
export default SellerDashboard;