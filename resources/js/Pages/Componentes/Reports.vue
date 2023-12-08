<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import { Head } from '@inertiajs/vue3';
import {ref} from 'vue';
import InputLabel from '@/Components/InputLabel.vue';
import SelectInput from '@/Components/SelectInput.vue';
import DataTable from 'datatables.net-vue3';
import 'datatables.net-dt/css/jquery.dataTables.css';
import ButtonsHtml5 from 'datatables.net-buttons/js/buttons.html5';
import 'datatables.net-buttons/js/buttons.print';
import 'datatables.net-responsive-dt';
import 'datatables.net-responsive-dt/css/responsive.dataTables.min.css';
import JsZip from 'jszip';
import pdfmake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
pdfmake.vfs = pdfFonts.pdfMake ? pdfFonts.pdfMake.vfs : pdfmake.vfs;
window.JSZip = JsZip;
DataTable.use(ButtonsHtml5);

const props = defineProps({
    componentes:{type:Object},productos:{type:Object}
});

const columns1 = ref([]);
const columns2 = ref([]);
const buttons1 = ref([]);
const buttons2 = ref([]);
const report = ref('1');
const types = ref([{'id':'1','name':'Components'},{'id':'2','name':'Products'}]);

columns1.value= [{data:null,render:function(data,type,row,meta)
    {return (meta.row + 1)}},
    {data:'code'},
    {data:'name'},
    {data:'cant'},
    {data:'ubica'},
    {data:'stock'},
]
columns2.value= [{data:null,render:function(data,type,row,meta)
    {return (meta.row + 1)}},
    {data:'code'},
    {data:'name'},
    {data:'cant'},
    {data:'stock'},
    {data:'ubica'},
    {data:'util'},
    {data:'sitio'},
    {data:'descript'},
]
buttons1.value= [
    {
        title:'Componentes',extend:'excelHtml5', 
        text:'<i class="fa-solid fa-file-excel"></i> Excel',
        className:'inline-flex items-center px-4 py-2 bg-green-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-700 focus:bg-green-700 active:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition ease-in-out duration-150'
    },
    {
        title:'Componentes',extend:'pdfHtml5', 
        text:'<i class="fa-solid fa-file-pdf"></i> PDF',
        className:'inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150'
    },
    {
        title:'Componentes',extend:'print', 
        text:'<i class="fa-solid fa-print"></i> PRINT',
        className:'inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150'
    },
    {
        title:'Componentes',extend:'copy', 
        text:'<i class="fa-solid fa-copy"></i> COPY',
        className:'inline-flex items-center px-4 py-2 bg-gray-200 border border-gray-800 rounded-md font-semibold text-xs uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150'
    }
]

buttons2.value= [
    {
        title:'Productos',extend:'excelHtml5', 
        text:'<i class="fa-solid fa-file-excel"></i> Excel',
        className:'inline-flex items-center px-4 py-2 bg-green-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-700 focus:bg-green-700 active:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition ease-in-out duration-150'
    },
    {
        title:'Productos',extend:'pdfHtml5', 
        text:'<i class="fa-solid fa-file-pdf"></i> PDF',
        className:'inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150'
    },
    {
        title:'Productos',extend:'print', 
        text:'<i class="fa-solid fa-print"></i> PRINT',
        className:'inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150'
    },
    {
        title:'Productos',extend:'copy', 
        text:'<i class="fa-solid fa-copy"></i> COPY',
        className:'inline-flex items-center px-4 py-2 bg-gray-200 border border-gray-800 rounded-md font-semibold text-xs uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150'
    }
]

</script>

<template>
    <Head :title="$t('Reports')" />

    <AppLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">{{$t('Reports')}}</h2>
        </template>

        <div class="py-12">
            <div class="mx-auto sm:px-6 lg:px-8 ">
                <div class="py-6 mb-5 pl-4 overflow-hidden shadow-sm sm:rounded-lg justify-start bg-green-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                    <SelectInput id="rep" class="mt-1 block w-3/4"
                    v-model="report" :options="types"></SelectInput>
                </div>
                <div v-if="report == '1'" class="px-6 py-6 mt-5 bg-white overflow-hidden shadow-sm sm:rounded-xl">
                    <DataTable :data="componentes" :columns="columns1"
                    class="w-full border border-gray-400" 
                    :options="{responsive:true, autoWidth:false,dom:'Bfrtip',buttons:buttons1}">
                    <thead>
                        <tr class="bg-gray-100">
                            <th class="px-2 py-2">#</th>
                            <th class="px-2 py-2">{{$t('CODE')}}</th>
                            <th class="px-2 py-2">{{$t('NAME')}}</th>
                            <th class="px-2 py-2">{{$t('AMOUNT')}}</th>
                            <th class="px-2 py-2">{{$t('LOCATION')}}</th>
                            <th class="px-2 py-2">{{$t('MINIMUM STOCK')}}</th>
                        </tr>
                    </thead>
                    </DataTable>
                </div>
                <div v-else class="px-6 py-6 bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <DataTable :data="productos" :columns="columns2"
                    class="w-full border border-gray-400" 
                    :options="{responsive:true, autoWidth:false,dom:'Bfrtip',buttons:buttons2}">
                    <thead>
                        <tr class="bg-gray-100">
                            <th class="px-2 py-2">#</th>
                            <th class="px-2 py-2">{{$t('CODE')}}</th>
                            <th class="px-2 py-2">{{$t('NAME')}}</th>
                            <th class="px-2 py-2">{{$t('AMOUNT')}}</th>
                            <th class="px-2 py-2">{{$t('MINIMUM STOCK')}}</th>
                            <th class="px-2 py-2">{{$t('LOCATION')}}</th>
                            <th class="px-2 py-2">{{$t('JIG')}}</th>
                            <th class="px-2 py-2">{{$t('LOCAT. JIG')}}</th>
                            <th class="px-2 py-2">{{$t('NOTE')}}</th>
                        </tr>
                    </thead>
                    </DataTable>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
