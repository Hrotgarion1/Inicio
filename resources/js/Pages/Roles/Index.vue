<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import LaraDashTable from '@/Components/Table.vue';
import LaraDashPagination from '@/Components/Pagination.vue';

import { Link } from '@inertiajs/vue3';
import DangerButton from '@/Components/DangerButton.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';
import SelectInput from '@/Components/SelectInput.vue';
import WarningButton from '@/Components/WarningButton.vue';
import Modal from '@/Components/Modal.vue';
import { Head,useForm } from '@inertiajs/vue3';
import { nextTick,ref } from 'vue';
import Swal from 'sweetalert2';

const nameInput = ref(null);
const modal = ref(false);
const title = ref('');
const operation = ref(1);
const id = ref('');

const props = defineProps({
    roles: Object
})
const form = useForm({
     name:''
});
const formPage = useForm({});
const onPageClick = (event)=>{
    formPage.get(route('roles.index',{page:event}));
}
const openModal = (op,name,role) =>{
    modal.value = true;
    nextTick( () => nameInput.value.focus());
    operation.value = op;
    id.value = role;
    if(op == 1){
        title.value = 'Crear Rol';
    }
    else{
        title.value = 'Editar Rol';
        
        form.name=name;
    
    }
}
const closeModal = () =>{
    modal.value = false;
    form.reset();
}
const save = () =>{
    if(operation.value == 1){
        form.post(route('roles.store'),{
            onSuccess: () => {ok('Rol creado')}
        });
    }
    else{
        form.put(route('roles.update',id.value),{
            onSuccess: () => {ok('Rol actualizado')}
        });
    }
}
const ok = (msj) =>{
    form.reset();
    //Si comento el "closeModal" hago que no se cierre cuando creo un nuevo componente, si lo descomento se cierra con cada nuevo registro
    closeModal();
    Swal.fire({title:msj,icon:'success'});
}
const deleteRole = (id,name) =>{
    const alerta = Swal.mixin({
        buttonsStyling:true
    });
    alerta.fire({
        title:'Estás seguro de eliminar '+name+' ?',
        icon:'question', showCancelButton:true,
        confirmButtonText:'<i class="fa-solid fa-check"></i> Si,eliminar',
        cancelButtonText:'<i class="fa-solid fa-ban"></i> Cancelar'
    }).then((result) => {
        if(result.isConfirmed) {
            form.delete(route('roles.destroy',id),{
                onSuccess: () =>{ok('Rol eliminado')}
            });
        }
    });
}
 const roles = props.roles
</script>

<template>
    <AppLayout :title="$t('Role')">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
        Roles
            </h2>
        </template>

            <LaraDashTable>
            <template #col>
                <!-- <th class="px-2 py-2">ID</th> -->
                <th class="px-2 py-2">{{$t('NAME')}}</th>
                <th class="px-2 py-2">{{$t('PERMISSIONS')}}</th>
                <th class="px-2 py-2">{{$t('ACCIONS')}}</th>
                
            </template>
            <template #row>
                <tr v-for="r in roles.data" :key="r.id" class="text-gray-500 hover:bg-green-200">
                    <!-- <td class="border border-gray-400 px-2 py-2">{{ r.id }}</td> -->
                    <td class="border border-gray-400 px-2 py-2">{{ r.name }}</td>
                    <td class="border border-gray-400 px-2 py-2">
                        <span class="mx-2" v-for="p in r.permissions" :key="p.id">{{ p.name }}</span>
                    </td>
                    <td class="border border-gray-400 px-2 py-2">
                            <WarningButton 
                            @click="openModal(2,r.name,r.id)">
                                <i class="fa-solid fa-edit"></i>
                            </WarningButton>
                    </td>
                </tr>
            </template>
            <template #pagination>
                    <LaraDashPagination :total="roles.total" :to="roles.to" :from="roles.from" :links="roles.links"/>
            </template>
        </LaraDashTable>
        <Modal :show="modal" @close="closeModal">
            <h2 class="p-3 text-lg font.medium text-hray-900">{{ title }}</h2>
            
            <div class="p-3">
                <InputLabel for="name" :value="$t('Name')"></InputLabel>
                <TextInput id="name" ref="nameInput"
                v-model="form.name" type="text" class="mt-1 block w-3/4"
                :placeholder="$t('Name')"></TextInput>
                <InputError :message="form.errors.name" class="mt-2"></InputError>
            </div>
            

            <div class="px-4 pt-2 pb-4">
                <PrimaryButton :disabled="form.processing" @click="save">
                    <i class="fa-solid fa-save"> <span class="ml-2">{{$t('Save')}}</span></i> 
                </PrimaryButton>

                <DangerButton class="ml-3" :disabled="form.processing"
                @click="closeModal">
                    {{$t('Cancel')}}
                </DangerButton>
            </div>
        </Modal>
    </AppLayout>
</template>