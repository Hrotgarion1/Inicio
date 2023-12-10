<script setup>
import { onMounted, onBeforeUnmount, ref, watch, defineProps } from 'vue';
import AppLayout from '@/Layouts/AppLayout.vue';
import DangerButton from '@/Components/DangerButton.vue';
import LaraDashTable from '@/Components/Table.vue';
import CardGrid from '@/Components/CardGrid.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import Swal from 'sweetalert2';
import LaraDashPagination from '@/Components/Pagination.vue';
import { router } from '@inertiajs/vue3';

//Para el buscador paso el prop filters
// Props para los productos y filtros
const { productos, filters } = defineProps(['productos', 'filters']);

// Asigna el valor de filters a una variable local
const localFilters = ref(filters);

// Lógica para el buscador
let search = ref(localFilters.value.search);

watch(search, value => {
  if (productos) {
    router.get('/productos', { search: value }, {
      preserveState: true,
      replace: true,
    });
  }
});
//hasta aqui

const form = useForm({
    id:''
});

const isMobile = ref(window.innerWidth <= 768);

const handleResize = () => {
  isMobile.value = window.innerWidth <= 768;
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
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
                    <div class="mt-3 mb-4 flex justify-self-star">
                <Link :href="route('productos.create')"
                :class="'inline-flex items-center px-4 py-2 bg-green-600 dark:bg-gray-200 border border-transparent rounded-md font-semibold text-xs text-white dark:text-gray-800 hover:bg-green-700 dark:hover:bg-white focus:bg-green-700 dark:focus:bg-white active:bg-green-900 dark:active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150'">
                <i class="fa-solid fa-plus-circle"><span class="ml-2">{{$t('Add')}}</span></i> 
                </Link>
                </div>

                    <div class="mt-3 mb-4">
                        <input
                            type="text"
                            v-model="search"
                            :placeholder="$t('Search product')"   
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 "/>
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
        <div v-if="isMobile">

          <div v-for="pro in productos?.data || []" :key="pro.id">
      <div class="max-w-sm mb-6 text-xs bg-green-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="flex">
            <a class="ml-2 mt-2">
            <img :src="'/storage/img/LOGOR3.png'" alt="logo" width="100">
        </a>
        <div class="mt-8 ml-2">
            <p>
            <h5 class="mb-2 mr-2 font-bold tracking-tight text-gray-900 dark:text-white">{{$t('LOCATION')}}</h5>
        </p>
        <p>{{ pro.ubica }}</p>
        </div>
        
        </div>
        
        <div class="p-5">
        <div class="flex">
            <div class="flex w-1/2">
            <p>
              <h5 class="mb-2 mr-2 font-bold tracking-tight text-gray-900 dark:text-white">{{$t('CODE')}}</h5>
            </p>
            <p>{{ pro.code }}</p>
          </div>
          <div class="flex w-1/2">
            <p>
              <h5 class="mb-2 mr-2 font-bold tracking-tight text-gray-900 dark:text-white">{{$t('NAME')}}</h5>
            </p>
            <p>{{ pro.name }}</p>
          </div>
        </div>

        <div class="flex">
            <div class="flex w-1/2">
            <p>
              <h5 class="mb-2 mr-2 font-bold tracking-tight text-gray-900 dark:text-white">{{$t('AMOUNT')}}</h5>
            </p>
            <p>{{ pro.cant }} <span v-if="pro.cant <= pro.stock" style="color: red; font-weight: bold;"> {{$t('¡Alert!')}}</span></p>
          </div>
          <div class="flex w-1/2">
            <p>
              <h5 class="mb-2 mr-2 font-bold tracking-tight text-gray-900 dark:text-white">{{$t('MINIMUM STOCK')}}</h5>
            </p>
            <p>{{ pro.stock }}</p>
          </div>
        </div>
        <div class="flex w-1/2">
            <p>
              <h5 class="mb-2 mr-2 font-bold tracking-tight text-gray-900 dark:text-white">{{$t('JIG')}}</h5>
            </p>
            <p>{{ pro.util }}</p>
        </div>
        <div class="mb-2">
            <p>
              <h5 class="mb-2 mr-2 font-bold tracking-tight text-gray-900 dark:text-white">{{$t('LOCAT. JIG')}}</h5>
            </p>
            <p>{{ pro.sitio }}</p>
        </div>
        <div class="mb-10">
            <p>
              <h5 class="mb-2 mr-2 font-bold tracking-tight text-gray-900 dark:text-white">{{$t('NOTE')}}</h5>
            </p>
            <p>{{ pro.descript }}</p>
        </div>

          <div class="flex justify-end">
            <!-- Enlaces para editar y eliminar -->
            <a :href="route('productos.edit', pro.id)" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <i class="fa-solid fa-edit"></i>
            </a>
            <a v-if="$page.props.user.permissions.includes('eliminar producto')" @click="deleteProducto(pro.id, pro.code, pro.name, pro.cant, pro.ubica, pro.util, pro.sitio, pro.descript)" class="inline-flex ml-10 items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
              <i class="fa-solid fa-trash"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
        </div>
            <div v-else>
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
        </div>
    </AppLayout>
</template>