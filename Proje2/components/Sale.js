import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { DataTable } from 'react-native-paper';

export default function Sale() {
  const [item, setState] = useState([
    ['5541.20000', '1.52900000', '1534614248.765567'],
    ['5539.90000', '0.30000000', '1534614241.769870'],
    ['5539.50000', '5.00000000', '1534613831.243486'],
  ]);

  const ws = new WebSocket('wss://ws.kraken.com');
  ws.onopen = () => {
    const message = JSON.stringify({
      event: 'subscribe',
      pair: ['XBT/USD', 'XBT/EUR'],
      subscription: {
        name: 'book',
      },
    });
    ws.send(message);
  };

  ws.onmessage = msg => {
    const array = JSON.parse(msg.data);
    if (!(typeof array.event === 'undefined' || array.event === null)) {
      if (array.event === 'heartbeat') {
        // pass
      }
    } else {
      array.map(item => {
        if (typeof item === 'undefined' || item === null) {
          // pass
        } else if ('a' in Object(item)) {
          setState(item.a);
        }
      });
    }
  };
  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 20, alignItems: 'center' }}>
          SATIŞ İŞLEMLERİ
        </Text>
      </View>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title numeric>Price</DataTable.Title>
          <DataTable.Title numeric>Amount</DataTable.Title>
          <DataTable.Title numeric>Total</DataTable.Title>
        </DataTable.Header>

        {item.map(variable => (
          <DataTable.Row>
            <DataTable.Cell numeric>{Math.round(variable[0])}</DataTable.Cell>
            <DataTable.Cell numeric>{Math.round(variable[1])}</DataTable.Cell>
            <DataTable.Cell numeric>
              {Math.round(variable[0]) * Math.round(variable[1])}
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </View>
  );
}
