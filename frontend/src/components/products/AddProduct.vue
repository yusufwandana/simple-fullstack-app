<template>
    <div>
        <div class="container">
            <div class="content">
                <div class="card px-5 py-5 mt-5">
                    <h1>Add new product</h1>
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
                    <div class="control">
                        <button class="button is-success mt-3" @click="saveProduct">Save</button>
                        <button class="button is-danger mt-3 mx-3" @click="redirectBack">Batal</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name:   "AddProduct",
    data() {
        return{
            productName:    "",
            productPrice:   "",
        };
    },
    methods:{
        // Create new product
        async saveProduct(){
            try {
                await axios.post('http://localhost:3000/product', {
                    name:   this.productName,
                    price:  this.productPrice,
                });
                this.productName = "";
                this.productPrice = "";
                this.$router.push("/");
            } catch (err) {
                console.log(err);
            }
        },
        async redirectBack(){
            this.$router.push('/');
        }
    },
};
</script>

<style>
</style>