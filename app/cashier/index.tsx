import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Image } from "expo-image";
import SearchButton from "@/components/SearchButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS } from "@/constants/theme";
import { ThemedText } from "@/components/ThemedText";

const DATA = [
  {
    id: "e01f2f63-a2b3-4d9f-a4b1-8e6e17c80b32",
    productName: "Tylenol",
    description: "20 tablets for pain and fever",
    price: 18.75,
    availableQuantity: 75,
    imageUrl:
      "https://images.pexels.com/photos/356004/pexels-photo-356004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250",
    cardName: "Tylenol - 20 tablets for pain and fever",
  },
  {
    id: "b93e1d7c-72e3-4b07-946d-8b5d5d706a12",
    productName: "Advil",
    description: "12 tablets for pain and inflammation",
    price: 22.0,
    availableQuantity: 60,
    imageUrl:
      "https://images.pexels.com/photos/3807699/pexels-photo-3807699.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250",
    cardName: "Advil - 12 tablets for pain and inflammation",
  },
  {
    id: "e94c9a60-f7e6-4c2b-93b3-1f58bb073287",
    productName: "Aspirin",
    description: "30 tablets for pain relief",
    price: 15.4,
    availableQuantity: 100,
    imageUrl:
      "https://images.pexels.com/photos/3343121/pexels-photo-3343121.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250",
    cardName: "Aspirin - 30 tablets for pain relief",
  },
  {
    id: "d40dbe8e-56a3-4d93-b0e4-8c014bcddf9e",
    productName: "Ibuprofen",
    description: "16 tablets for pain and fever",
    price: 20.1,
    availableQuantity: 40,
    imageUrl:
      "https://images.pexels.com/photos/3343121/pexels-photo-3343121.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250",
    cardName: "Ibuprofen - 16 tablets for pain and fever",
  },
  {
    id: "f3c4232b-f76e-4bde-a30c-b058c9f4d65d",
    productName: "Naproxen",
    description: "10 tablets for pain and inflammation",
    price: 26.0,
    availableQuantity: 55,
    imageUrl:
      "https://images.pexels.com/photos/3807699/pexels-photo-3807699.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250",
    cardName: "Naproxen - 10 tablets for pain and inflammation",
  },
  {
    id: "a2b7c5d0-57cf-44b0-bb5c-2d0e5f71254cb",
    productName: "Paracetamol",
    description: "24 tablets for pain relief",
    price: 14.9,
    availableQuantity: 80,
    imageUrl:
      "https://images.pexels.com/photos/356004/pexels-photo-356004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250",
    cardName: "Paracetamol - 24 tablets for pain relief",
  },
  {
    id: "c9d7fbd4-3d5d-4f07-9eaf-82e3a4c7d1f2",
    productName: "Motrin",
    description: "18 tablets for pain and fever",
    price: 23.25,
    availableQuantity: 45,
    imageUrl:
      "https://images.pexels.com/photos/3343121/pexels-photo-3343121.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250",
    cardName: "Motrin - 18 tablets for pain and fever",
  },
  {
    id: "f8e2a0a6-9d36-4a68-bb99-9d8f7e0134b6",
    productName: "Diclofenac",
    description: "20 tablets for pain and inflammation",
    price: 28.0,
    availableQuantity: 30,
    imageUrl:
      "https://images.pexels.com/photos/3807699/pexels-photo-3807699.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250",
    cardName: "Diclofenac - 20 tablets for pain and inflammation",
  },
  {
    id: "b72d9f93-3b78-4c23-8519-5d9a9c1a34e8",
    productName: "Celebrex",
    description: "15 tablets for pain and inflammation",
    price: 32.5,
    availableQuantity: 25,
    imageUrl:
      "https://images.pexels.com/photos/356004/pexels-photo-356004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250",
    cardName: "Celebrex - 15 tablets for pain and inflammation",
  },
  {
    id: "e6e4a5b7-d476-4b1d-a8e3-4c0a1a6b8d42",
    productName: "Alka-Seltzer",
    description: "10 tablets for heartburn and pain",
    price: 19.0,
    availableQuantity: 70,
    imageUrl:
      "https://images.pexels.com/photos/3343121/pexels-photo-3343121.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250",
    cardName: "Alka-Seltzer - 10 tablets for heartburn and pain",
  },
  {
    id: "e9b8e947-732e-4e35-82f5-b87d032c5d4d",
    productName: "Tylenol",
    description: "20 tablets for pain and fever",
    price: 18.75,
    availableQuantity: 75,
    imageUrl:
      "https://images.pexels.com/photos/356004/pexels-photo-356004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250",
    cardName: "Tylenol - 20 tablets for pain and fever",
  },
  {
    id: "f91f639d-cd6c-41e4-9a1b-fc5d7437e7a1",
    productName: "Advil",
    description: "12 tablets for pain and inflammation",
    price: 22.0,
    availableQuantity: 60,
    imageUrl:
      "https://images.pexels.com/photos/3807699/pexels-photo-3807699.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250",
    cardName: "Advil - 12 tablets for pain and inflammation",
  },
  {
    id: "a1c54d90-451d-4c8e-8c8f-573897fa3655",
    productName: "Aspirin",
    description: "30 tablets for pain relief",
    price: 15.4,
    availableQuantity: 100,
    imageUrl:
      "https://images.pexels.com/photos/3343121/pexels-photo-3343121.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250",
    cardName: "Aspirin - 30 tablets for pain relief",
  },
  {
    id: "b5db6f62-3b3e-4642-8e29-7b1a4fd7d67a",
    productName: "Ibuprofen",
    description: "16 tablets for pain and fever",
    price: 20.1,
    availableQuantity: 40,
    imageUrl:
      "https://images.pexels.com/photos/3343121/pexels-photo-3343121.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250",
    cardName: "Ibuprofen - 16 tablets for pain and fever",
  },
  {
    id: "f7d45d7d-8e4f-4bcb-90b8-d2729e3b84d2",
    productName: "Naproxen",
    description: "10 tablets for pain and inflammation",
    price: 26.0,
    availableQuantity: 55,
    imageUrl:
      "https://images.pexels.com/photos/3807699/pexels-photo-3807699.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250",
    cardName: "Naproxen - 10 tablets for pain and inflammation",
  },
  {
    id: "eae8b76a-2a69-4e77-9f5e-96f8914a96f3",
    productName: "Paracetamol",
    description: "24 tablets for pain relief",
    price: 14.9,
    availableQuantity: 80,
    imageUrl:
      "https://images.pexels.com/photos/356004/pexels-photo-356004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250",
    cardName: "Paracetamol - 24 tablets for pain relief",
  },
  {
    id: "9f8c4b8c-6c2d-4b8f-a295-6b1d070ae5e4",
    productName: "Motrin",
    description: "18 tablets for pain and fever",
    price: 23.25,
    availableQuantity: 45,
    imageUrl:
      "https://images.pexels.com/photos/3343121/pexels-photo-3343121.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250",
    cardName: "Motrin - 18 tablets for pain and fever",
  },
  {
    id: "a8c6e8e6-dc92-4f57-a2b5-39d4f5a73c7d",
    productName: "Diclofenac",
    description: "20 tablets for pain and inflammation",
    price: 28.0,
    availableQuantity: 30,
    imageUrl:
      "https://images.pexels.com/photos/3807699/pexels-photo-3807699.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250",
    cardName: "Diclofenac - 20 tablets for pain and inflammation",
  },
  {
    id: "c9d5f7d6-0a80-4d9f-a35a-30e4aeebd3f6",
    productName: "Celebrex",
    description: "15 tablets for pain and inflammation",
    price: 32.5,
    availableQuantity: 25,
    imageUrl:
      "https://images.pexels.com/photos/356004/pexels-photo-356004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250",
    cardName: "Celebrex - 15 tablets for pain and inflammation",
  },
  {
    id: "b4a5c8dd-d07c-4b70-9c5d-fd2f6b99ef69",
    productName: "Alka-Seltzer",
    description: "10 tablets for heartburn and pain",
    price: 19.0,
    availableQuantity: 70,
    imageUrl:
      "https://images.pexels.com/photos/3343121/pexels-photo-3343121.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250",
    cardName: "Alka-Seltzer - 10 tablets for heartburn and pain",
  },
];
type ProductProp = {
  productName: string;
  description: string;
  price: number;
  availableQuantity: number;
  imageUrl: string;
  cardName: string;
  count: number;
  setCount: (count: number) => void;
};
const ProductItem = ({
  productName,
  description,
  price,
  availableQuantity,
  cardName,
  imageUrl,
  count,
  setCount,
}: ProductProp) => (
  <Pressable
    onPress={() => {
      setCount(count + 1);
    }}
    onLongPress={() => {
      alert(
        "Long press open product description with option to add quantity and add to cart."
      );
    }}
    style={styles.product}>
    <View style={styles.productImage}>
      <Image style={styles.product} source={imageUrl} contentFit="cover" />
    </View>
    <View style={styles.productDetails}>
      <Text numberOfLines={1}>{cardName}</Text>
      {/* <Text numberOfLines={1}>{description}</Text> */}
      <ThemedText type="defaultSemiBold">R {price}</ThemedText>
    </View>
  </Pressable>
);

const numColumns = 5;
const Cashier = () => {
  const [count, setCount] = useState(1);

  const handleSearch = () => {
    alert("We lookingly");
  };

  const handleDecrement = () => {
    alert("Enter you pin as admin Override!! ");
  };
  return (
    <View style={styles.container}>
      <View style={styles.productGrid}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            // onChangeText={}
            // value={number}
            placeholder="Search all Products"
          />
          <SearchButton onPress={handleSearch} title="Search" />
        </View>
        <View>
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <ProductItem
                productName={item.productName}
                description={item.description}
                price={item.price}
                availableQuantity={item.availableQuantity}
                imageUrl={item.imageUrl}
                cardName={item.cardName}
                count={count}
                setCount={setCount}
              />
            )}
            keyExtractor={(product) => product.id}
            numColumns={numColumns}
          />
        </View>
      </View>
      <View style={styles.reciept}>
        <View style={styles.recieptContent}>
          <View style={styles.logedInCashier}>
            <View style={styles.cashierName}>
              <Ionicons name="person" size={20} style={styles.cashierIcon} />
              <Text>Mutombo Tshomba</Text>
            </View>
            <Ionicons
              name="eye-outline"
              size={20}
              style={styles.cashierAction}
            />
          </View>
          <View>
            <View style={styles.recieptItemList}>
              <View style={styles.nameAndPrice}>
                <Text style={styles.productName}>Product Name can it be</Text>
                <Text style={styles.itemPrice}>R 6 800.20</Text>
              </View>
              <View style={styles.itemCount}>
                <TouchableOpacity
                  onPress={() => {
                    setCount(count + 1);
                  }}>
                  <Ionicons
                    name="add-circle"
                    size={25}
                    style={styles.countAction}
                  />
                </TouchableOpacity>
                <Text>{count}</Text>
                <TouchableOpacity onPress={handleDecrement}>
                  <Ionicons
                    name="remove-circle"
                    size={25}
                    style={styles.countAction}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.recieptItemList}>
              <View style={styles.nameAndPrice}>
                <Text style={styles.productName}>Product Name can it be</Text>
                <Text style={styles.itemPrice}>R 6 800.20</Text>
              </View>
              <View style={styles.itemCount}>
                <TouchableOpacity
                  onPress={() => {
                    setCount(count + 1);
                  }}>
                  <Ionicons
                    name="add-circle"
                    size={25}
                    style={styles.countAction}
                  />
                </TouchableOpacity>
                <Text>{count}</Text>
                <TouchableOpacity onPress={handleDecrement}>
                  <Ionicons
                    name="remove-circle"
                    size={25}
                    style={styles.countAction}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.recieptItemList}>
              <View style={styles.nameAndPrice}>
                <Text style={styles.productName}>Product Name can it be</Text>
                <Text style={styles.itemPrice}>R 6 800.20</Text>
              </View>
              <View style={styles.itemCount}>
                <TouchableOpacity
                  onPress={() => {
                    setCount(count + 1);
                  }}>
                  <Ionicons
                    name="add-circle"
                    size={25}
                    style={styles.countAction}
                  />
                </TouchableOpacity>
                <Text>{count}</Text>
                <TouchableOpacity onPress={handleDecrement}>
                  <Ionicons
                    name="remove-circle"
                    size={25}
                    style={styles.countAction}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.recieptItemList}>
              <View style={styles.nameAndPrice}>
                <Text style={styles.productName}>Product Name can it be</Text>
                <Text style={styles.itemPrice}>R 6 800.20</Text>
              </View>
              <View style={styles.itemCount}>
                <TouchableOpacity
                  onPress={() => {
                    setCount(count + 1);
                  }}>
                  <Ionicons
                    name="add-circle"
                    size={25}
                    style={styles.countAction}
                  />
                </TouchableOpacity>
                <Text>{count}</Text>
                <TouchableOpacity onPress={handleDecrement}>
                  <Ionicons
                    name="remove-circle"
                    size={25}
                    style={styles.countAction}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.totalSummary}>
            <View style={styles.subTotal}>
              <Text>Sub Total</Text>
              <Text>R 156.12</Text>
            </View>
            <View style={styles.subTotal}>
              <Text>Tax 10% (VAT Included)</Text>
              <Text>R 16.58</Text>
            </View>
            <View style={styles.subTotal}>
              <Text>Discount 20%</Text>
              <Text>-R 34.54</Text>
            </View>
            <View style={styles.subTotal}>
              <Text style={styles.total}>Total</Text>
              <Text style={styles.total}>R 138.16</Text>
            </View>
          </View>
          {/* <View style={styles.paymentTypes}>
            <View>
              <Ionicons
                name="cash-outline"
                size={50}
                style={styles.paymentAction}
              />
            </View>

            <View>
              <Ionicons
                name="card-outline"
                size={50}
                style={styles.paymentAction}
              />
            </View>

            <View>
              <Ionicons
                name="wallet-outline"
                size={50}
                style={styles.paymentAction}
              />
            </View>
          </View> */}
          <View style={styles.payButton}>
            <SearchButton onPress={handleSearch} title="Take Payment" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Cashier;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#e9e9e9",
    rowGap: 50,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 60,
    margin: 12,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  c: {
    height: 60,
    margin: 12,
    padding: 10,
    backgroundColor: "red",
  },
  product: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    margin: 5,
    height: 200,
    padding: 10,
    borderRadius: 5,
  },
  productDetails: {
    // backgroundColor: "red",
    textAlign: "center",
    width: "100%",
  },
  productImage: {
    backgroundColor: "#e9e9e9",
    flex: 1,
    width: "100%",
  },
  productGrid: {
    flex: 5,
    padding: 30,
    paddingTop: 45,
  },
  reciept: {
    flex: 2,
    paddingTop: 30,
    paddingBottom: 30,
    paddingRight: 30,
  },
  recieptContent: {
    backgroundColor: "#fff",
    height: "100%",
    padding: 15,
  },
  logedInCashier: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#e9e9e9",
    borderRadius: 5,
    height: 60,
  },
  recieptItemList: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  nameAndPrice: {
    flex: 4,
  },

  cashierName: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    columnGap: 15,
  },

  cashierIcon: {
    backgroundColor: "#fff",
    padding: 5,
    // borderRadius: "100%",
    borderRadius: 50,
  },
  cashierAction: {
    backgroundColor: "#3767A6",
    padding: 5,
    borderRadius: 5,
    color: "white",
  },
  countAction: {
    color: "#000",
  },
  itemPrice: {
    fontWeight: "bold",
    color: "#3767A6",
    fontSize: 16,
  },
  productName: {
    fontWeight: "bold",
  },
  itemCount: {
    flex: 1,
    flexDirection: "row",
    columnGap: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  totalSummary: {
    marginTop: 15,
    paddingHorizontal: 10,
    paddingBottom: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
  },
  subTotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomStyle: "dotted",
    borderBottomWidth: 1,
    borderBottomColor: "#bdbdbd",
    paddingVertical: 10,
  },
  paymentTypes: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  paymentAction: {
    padding: 5,
    borderRadius: 10,
    color: "#9e9e9e",
    borderWidth: 0.5,
    borderColor: "#9e9e9e",
  },
  payButton: {
    marginTop: 15,
  },

  total: {
    fontWeight: "bold",
    color: "#000",
    fontSize: 16,
  },
});
