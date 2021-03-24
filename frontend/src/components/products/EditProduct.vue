<template>
    <div>
        <div class="container">
            <div class="content">
                <div class="card mt-5 p-5">
                    <h1>Update Product</h1>
                    <hr>
                    <div class="columns">
                        <div class="column">
                            <div class="field">
                                <label for="label">Name</label>
                                <div class="control">
                                    <input type="text" class="input" placeholder="Product name" v-model="productName">
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="field">
                                <label for="label">Price</label>
                                <div class="control">
                                    <input type="text" class="input" placeholder="Product price" v-model="productPrice">
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="level">
                        <div class="level-right">
                            <button class="button is-success" @click="updateProduct">Update</button>
                            <button class="button is-danger mx-2" @click="redirectBack">Back</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name:   "EditProduct",
    data() {
        return{
            productName:    "",
            productPrice:   ""
        };
    },
    created(){
        this.getProductById();
    },
    methods:{
        // Get product
        async getProductById(){
            try {
                const response = await axios.get(`http://localhost:3000/product/${this.$route.params.id}`);
                this.productName = response.data.name;
                this.productPrice= response.data.price;
            } catch (err) {
                console.log(err);
            }
        },
        // Update
        async updateProduct(){
            try {
                await axios.put(`http://localhost:3000/product/${this.$route.params.id}`, {
                    name:   this.productName,
                    price:  this.productPrice,

                });
                this.productName = "";
                this.productPrice = "";
                this.$router.push('/');
            } catch (err) {
                console.log(err);
            }
        },
        async redirectBack(){
            this.$router.push('/');
        }
    }
}
</script>

<style>
</style>