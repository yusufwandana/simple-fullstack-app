<template>
    <div>
        <div class="container">
            <div class="content">
                <div class="card mt-5 px-5 pb-5">
                    <div class="level">
                        <div class="level-left mt-5">
                            <h1>List Product</h1>
                        </div>
                        <div class="level-right">
                            <router-link :to="{name: 'Create'}" class="button is-success mt-3">Add new product</router-link>
                        </div>
                    </div>
                    <hr>
                    <table class="table is-stripped is-bordered is-fullwidth">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th class="has-text-centered">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in items" :key="item.id">
                                <td>{{item.name}}</td>
                                <td>{{item.price}}</td>
                                <td class="has-text-centered">
                                    <router-link :to="{name: 'Edit', params: {id: item.id}}" class="button is-info is-small mx-1">
                                        Edit
                                    </router-link>
                                    <a class="button is-danger is-small mx-1" @click="deleteProduct(item.id)">
                                        Delete
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name:   "ProductList",
    data() {
        return{
            items: [],
        };
    },
    created(){
        this.getProducts()
    },
    methods:{
        // Get all product
        async getProducts(){
            try{
                const response = await axios.get("http://localhost:3000/products");
                this.items = response.data;
            }catch(err){
                console.log(err);
            }
        },
        // Delete
        async deleteProduct(id){
            const alert = confirm('Sure?');
            if (alert == true) {
                try {
                    await axios.delete(`http://localhost:3000/product/${id}`);
                    this.getProducts();
                } catch (err) {
                    console.log(err);
                }
            }else{
                this.$router.push('/');
            }
        },
    }
}
</script>

<style>
</style>