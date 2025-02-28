import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: { padding: 30 },
    section: { marginBottom: 10 },
    header: { fontSize: 18, marginBottom: 10, textAlign: "center" },
    text: { fontSize: 12, marginBottom: 5 },
});

const Invoice = ({ customer }) => {    
    return (
        <Document>
            <Page style={styles.page}>
                <View style={styles.header}>
                    <Text>Invoice</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.text}>Customer: {customer.name}</Text>
                    <Text style={styles.text}>Contact: {customer.contact}</Text>
                    <Text style={styles.text}>Address: {customer.address}</Text>
                    <Text style={styles.text}>Billing Date: {customer.billingDate}</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.text}>Total Quantity: {customer.totalQuantity}</Text>
                    <Text style={styles.text}>Total Price:{customer.totalPrice.toFixed(2)}</Text>
                </View>
            </Page>
        </Document>
    );
}

export default Invoice;
