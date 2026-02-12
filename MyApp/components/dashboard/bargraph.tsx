import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
// we got this table from react native paper.
import { DataTable } from 'react-native-paper';
import { Bar, BarChart, Cell, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
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
                //data is passed in through the api endpoint /analytics/top-products
                const response = await axios.get<AnalyticsItem[]>('http://localhost:5000/analytics/top-prodruoucts');
                // pass the data through the set method.
                setanalyticsData(response.data);
                console.log('Fetched analytics data:', response.data);
            } catch (error) {
                console.error('Error fetching analytics data:', error);
            }
        };
        fetchAnalyticsData();
    }, []);
     const revenues = analyticsdata.map(item => Number(item.total_revenue));
     const maxRevenue = Math.max(...revenues);
     console.log("Max Revenue:", maxRevenue);

     const minRevenue = Math.min(...revenues);
     console.log("Min Revenue:", minRevenue);
    const epsilon = 0.01; // Small tolerance for floating-point comparison

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
                //buit in to show the variables on hover over the bar BarChar
                <Tooltip />
                <Legend />
                <Bar dataKey="total_quantity" fill="#8884d8" name="Total Quantity Sold" />

                <Bar dataKey="total_revenue"  name="Total Revenue" >
                    {analyticsdata.map((entry, index) => {
                        const value = Number(entry.total_revenue);
                        let color ="blue";
                        if(Math.abs(value - maxRevenue) < epsilon) color ="green";
                        else if(Math.abs(value - minRevenue) < epsilon || value == minRevenue) color ="red";
                        return <Cell key={`cell-${index}`} fill={color} />;
                    })}
                </Bar>
                        
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