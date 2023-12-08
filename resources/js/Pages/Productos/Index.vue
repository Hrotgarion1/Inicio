<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import DangerButton from '@/Components/DangerButton.vue';
import { Head,Link,useForm } from '@inertiajs/vue3';
import Swal from 'sweetalert2';
import LaraDashPagination from '@/Components/Pagination.vue';
import LaraDashTable from '@/Components/Table.vue';
//Buscador
import {ref,watch, defineProps} from 'vue';
import { router } from '@inertiajs/vue3'

//Para el buscador paso el prop filters
const props = defineProps({
    productos: Object,
    filters: Object
});
//logica para el buscador
 let search = ref(props.filters.search);

 watch(search, value => {
     router.get('/productos', {search: value},
     {
         preserveState: true,
         replace: true,
     }
   );
    
 });
//hasta aqui

const form = useForm({
    id:''
});
const deleteProducto = (id,code) =>{
    const alerta = Swal.mixin({
        buttonsStyling:true
    });
    alerta.fire({
    title: 'Estás seguro de eliminar ' + code + ' ?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: '<i class="fa-solid fa-check"></i> Si, eliminalo',
    cancelButtonText: '<i class="fa-solid fa-ban"></i> Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      form.delete(route('productos.destroy', id), {
        onSuccess: () => {
          ok('Producto eliminado');
        }
      });
    }
  });
};

const ok = (msj) => {
  form.reset();
  Swal.fire({ title: msj, icon: 'success' });
}

</script>

<template>
    <Head :title="$t('Products')">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"> />
    </Head> 

    <AppLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">{{$t('Create and update Products')}}</h2>
        </template>

        <div class="py-1">
            <div class="bg-white grid v-screen place-items-center overflow-x-auto mx-auto sm:px-6 lg:px-8">
                <div v-if="$page.props.user.permissions.includes('crear producto')" class="bg-green-100 grid grid-cols-1 sm:grid-cols-2 py-4 px-4 sm:px-8 place-items-center overflow-hidden m-5 shadow-lg rounded-2xl">
                    <div class="mt-3 mb-4">
                        <input
                            type="text"
                            v-model="search"
                            :placeholder="$t('Search product')"   
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 "/>
                        </div>

                <div class="mt-3 mb-4 flex justify-self-end">
                <Link :href="route('productos.create')"
                :class="'inline-flex items-center px-4 py-2 bg-green-600 dark:bg-gray-200 border border-transparent rounded-md font-semibold text-xs text-white dark:text-gray-800 hover:bg-green-700 dark:hover:bg-white focus:bg-green-700 dark:focus:bg-white active:bg-green-900 dark:active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150'">
                <i class="fa-solid fa-plus-circle"><span class="ml-2">{{$t('Add')}}</span></i> 
                </Link>
                </div>

                </div>

                <div v-else class="bg-green-100 grid grid-cols-1 sm:grid-cols-1 py-4 px-4 sm:px-8 place-items-center overflow-hidden m-5 shadow-lg rounded-2xl">
                    <div class="mt-3 mb-4">
                        <input
                            type="text"
                            v-model="search"
                            :placeholder="$t('Search product')"   
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 "/>
                        </div>

                </div>
            
            <LaraDashTable v-if="$page.props.user.permissions.includes('eliminar producto')">
            <template #col>
                <!-- <th class="px-2 py-2">#</th> -->
                <th class="px-2 py-2">{{$t('CODE')}}</th>
                <th class="px-2 py-2">{{$t('NAME')}}</th>
                <th class="px-2 py-2">{{$t('AMOUNT')}}</th>
                <th class="px-2 py-2">{{$t('MINIMUM STOCK')}}</th>
                <th class="px-2 py-2">{{$t('LOCATION')}}</th>
                <th class="px-2 py-2">{{$t('JIG')}}</th>
                <th class="px-2 py-2">{{$t('LOCAT. JIG')}}</th>
                <th class="px-2 py-2">{{$t('NOTE')}}</th>
                <th class="px-2 py-2"></th>
                <th class="px-2 py-2"></th>
            </template>
            <template #row>
                <tr v-for="pro, i in productos.data" :key="pro.id" class="text-gray-500 hover:bg-green-200">
                    <!-- <td class="border border-gray-400 px-2 py-2">{{ (i+1) }}</td> -->
                        <td class="border border-gray-400 px-2 py-2">{{ pro.code }}</td>
                        <td class="border border-gray-400 px-2 py-2">{{ pro.name }}</td>
                        <td class="border border-gray-400 px-2 py-2">{{ pro.cant }}
                        <!-- Lógica para mostrar alerta si pro.cant es menor que pro.stock -->
                        <span v-if="pro.cant <= pro.stock" style="color: red; font-weight: bold;"> {{$t('¡Alert!')}}</span>
                        </td>
                        <td class="border border-gray-400 px-2 py-2">{{ pro.stock }}</td>
                        <td class="border border-gray-400 px-2 py-2">{{ pro.ubica }}</td>
                        <td class="border border-gray-400 px-2 py-2">{{ pro.util }}</td>
                        <td class="border border-gray-400 px-2 py-2">{{ pro.sitio }}</td>
                        <td class="border border-gray-400 px-2 py-2">{{ pro.descript }}</td>
                        <td class="border border-gray-400 px-2 py-2">
                            <Link :href="route('productos.edit',pro.id)"
                            :class="'px-4 py-2 bg-blue-400 text-white border rounded-md font-semibold text-xs'">
                            <i class="fa-solid fa-edit"></i>
                            </Link>
                        </td>
                        <td class="border border-gray-400 px-4 py-4">
                            <DangerButton @click="deleteProducto(pro.id,pro.code,pro.name,pro.cant,pro.ubica,pro.util,pro.sitio,pro.descript)">
                                <i class="fa-solid fa-trash"></i>
                            </DangerButton>
                        </td>
                </tr>
            </template>
            <template #pagination>
                    <LaraDashPagination :total="productos.total" :to="productos.to" :from="productos.from" :links="productos.links"/>
            </template>
            </LaraDashTable>

            <LaraDashTable v-else>
            <template #col>
                <!-- <th class="px-2 py-2">#</th> -->
                <th class="px-2 py-2">{{$t('CODE')}}</th>
                <th class="px-2 py-2">{{$t('NAME')}}</th>
                <th class="px-2 py-2">{{$t('AMOUNT')}}</th>
                <th class="px-2 py-2">{{$t('MINIMUM STOCK')}}</th>
                <th class="px-2 py-2">{{$t('LOCATION')}}</th>
                <th class="px-2 py-2">{{$t('JIG')}}</th>
                <th class="px-2 py-2">{{$t('LOCAT. JIG')}}</th>
                <th class="px-2 py-2">{{$t('NOTE')}}</th>
                <th class="px-2 py-2"></th>
            </template>
            <template #row>
                <tr v-for="pro, i in productos.data" :key="pro.id" class="text-gray-500 hover:bg-green-200">
                    <!-- <td class="border border-gray-400 px-2 py-2">{{ (i+1) }}</td> -->
                        <td class="border border-gray-400 px-2 py-2">{{ pro.code }}</td>
                        <td class="border border-gray-400 px-2 py-2">{{ pro.name }}</td>
                        <td class="border border-gray-400 px-2 py-2">{{ pro.cant }}
                        <!-- Lógica para mostrar alerta si pro.cant es menor que pro.stock -->
                        <span v-if="pro.cant <= pro.stock" style="color: red; font-weight: bold;"> {{$t('¡Alert!')}}</span>
                        </td>
                        <td class="border border-gray-400 px-2 py-2">{{ pro.stock }}</td>
                        <td class="border border-gray-400 px-2 py-2">{{ pro.ubica }}</td>
                        <td class="border border-gray-400 px-2 py-2">{{ pro.util }}</td>
                        <td class="border border-gray-400 px-2 py-2">{{ pro.sitio }}</td>
                        <td class="border border-gray-400 px-2 py-2">{{ pro.descript }}</td>
                        <td class="border border-gray-400 px-2 py-2">
                            <Link :href="route('productos.edit',pro.id)"
                            :class="'px-4 py-2 bg-blue-400 text-white border rounded-md font-semibold text-xs'">
                            <i class="fa-solid fa-edit"></i>
                            </Link>
                        </td>
                </tr>
            </template>
            <template #pagination>
                    <LaraDashPagination :total="productos.total" :to="productos.to" :from="productos.from" :links="productos.links"/>
            </template>
            </LaraDashTable>
        </div>
        </div>
    </AppLayout>
</template>