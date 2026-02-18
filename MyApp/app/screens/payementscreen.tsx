import React from 'react';
import {ThemeProvider } from "@mui/material/styles";
import Checkout from "../../components/checkout/Checkout";
import ShippingAddressForm from '@/app/checkout/shipping';
import CardInfo from '@/app/checkout/payment';
import { Scroll } from 'lucide-react-native';
import { ScrollView } from 'react-native/Libraries/Components/ScrollView/ScrollView';
const PaymentScreen: React.FC = () =>{
    return (
            <ShippingAddressForm />
    );
}
export default PaymentScreen;