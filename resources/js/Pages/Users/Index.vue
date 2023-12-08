<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import DangerButton from '@/Components/DangerButton.vue';
import { Head,Link,useForm } from '@inertiajs/vue3';
import Swal from 'sweetalert2';
import LaraDashPagination from '@/Components/Pagination.vue';
import LaraDashTable from '@/Components/Table.vue';
import Buscador from '@/Components/SearchBar.vue';
//Necesarios para el buscador
import { ref, watch, defineProps } from "vue";
import { router } from '@inertiajs/vue3'


 const props = defineProps({
     users: Object,
     filters: Object
     
 });

 let search = ref(props.filters.search);

 watch(search, (value) => {
  router.get("/users",{ search: value },
    {
        preserveState: true,
        replace: true,
    }
  );
}); 

const form = useForm({
    id:''
});

const deleteUser = (id,name) =>{
    const alerta = Swal.mixin({
        buttonsStyling:true
    });
    alerta.fire({
        title:'Estás seguro de eliminarlo '+name+' ?',
        icon:'question', showCancelButton:true,
        confirmButtonText:'<i class="fa-solid fa-check"></i> Si, eliminalo',
        cancelButtonText:'<i class="fa-solid fa-ban"></i> Cancelar'
    }).then((result) => {
        if(result.isConfirmed) {
            form.delete(route('users.destroy',id));
        }
    });
}

</script>

<template>
    <AppLayout :title="$t('Users')">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
        {{$t('Users List')}}
            </h2>
        </template>

        <div class="py-1">
            
            <div class="bg-white grid v-screen place-items-center overflow-x-auto mx-auto sm:px-6 lg:px-8">

                <div class="bg-green-100 grid grid-cols-2 py-4 px-4  v-screen place-items-center overflow-hidden m-5 shadow-lg rounded-2xl">
                    <div class="mb-2">
                        <input
                            type="text"
                            v-model="search"
                            :placeholder="$t('Search')"    
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 "/>
                        </div>

            <div class="mt-3 mb-4 flex justify-self-end">
                <Link :href="route('users.create')"
                :class="'px-4 py-2 bg-green-600 text-white border rounded-md font-semibold text-xs'">
                <i class="fa-solid fa-plus-circle"></i> <span class="ml-2">{{$t('Add')}}</span>
                </Link>
            </div>

                </div>
            <LaraDashTable>
            <template #col>
                <th class="px-2 py-2">{{$t('NAME')}}</th>
                <th class="px-2 py-2">{{$t('EMAIL')}}</th>
                <th class="px-2 py-2">{{$t('ROLE')}}</th>
                <th class="px-2 py-2"></th>
                <th class="px-2 py-2"></th>
            </template>
            <template #row>
                <tr v-for="(use, index) in users.data" :key="use.id" :class="'bg-white text-gray-500 hover:bg-green-200'">
                    <!-- <td class="border border-gray-400 px-2 py-2">{{ (i+1) }}</td> -->
                        
                        <td class="border border-gray-400 px-2 py-2">{{ use.name }}</td>
                        <td class="border border-gray-400 px-2 py-2">{{ use.email }}</td>
                        <td class="border border-gray-400 px-2 py-2">{{ use.role}}</td>
                        
                        <td class="border border-gray-400 px-2 py-2">
                            <Link :href="route('users.edit',use.id)"
                            :class="'px-4 py-2 bg-blue-400 text-white border rounded-md font-semibold text-xs'">
                            <i class="fa-solid fa-edit"></i>
                            </Link>
                        </td>
                        <td class="border border-gray-400 px-4 py-4">
                            <DangerButton @click="deleteUser(use.id,use.name)">
                                <i class="fa-solid fa-trash"></i>
                            </DangerButton>
                        </td>
                </tr>
            </template>

            <template #pagination ="{ links, to, from, total }">
                    <LaraDashPagination :total="users.total" :to="users.to" :from="users.from" :links="users.links"/>
            </template>
            </LaraDashTable>
        </div>
        </div>

           
    </AppLayout>
</template>