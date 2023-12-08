<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import { Link } from '@inertiajs/vue3';
import TextInput from '@/Components/TextInput.vue';
import { Head,useForm } from '@inertiajs/vue3';

const form = useForm({

    name:'',
    email:'',
    role:'',
    
});

</script>

<template>

<Head :title="$t('Create User')" />
    <AppLayout >
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
        {{$t('Create User')}}
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="p-4 bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <form @submit.prevent="form.post(route('users.store'))"
                    class="mt-6 space-y-2 max-w-xl">

                    <InputLabel for="name" :value="$t('Name')"></InputLabel>
                    <TextInput id="name" v-model="form.name" autofocus required
                    type="text"
                    class="mt-1 block w-full"></TextInput>
                    <InputError :message="form.errors.name" class="mt-2"></InputError>

                    <InputLabel for="email" :value="$t('Email')"></InputLabel>
                    <TextInput id="email" v-model="form.email" autofocus required
                    type="text"
                    class="mt-1 block w-full"></TextInput>
                    <InputError :message="form.errors.email" class="mt-2"></InputError>

                    <InputLabel for="role" :value="$t('Role')"></InputLabel>
                <select id="role" v-model="form.role" required class="mt-1 block w-full">
                    <option value="admin">Admin</option>
                    <option value="editor">Editor</option>
                    <option value="invitado">Invitado</option>
                    <!-- Agrega las opciones de roles que necesites -->
                </select>
                <InputError :message="form.errors.role" class="mt-2"></InputError>

                    <div class="px-2 py-2">
                    <PrimaryButton :disabled="form.processing" class="mx-2">
                        <i class="fa-solid fa-save"> <span class="ml-2">{{$t('Save')}}</span></i>
                    </PrimaryButton>

                    <Link :href="route('users.index')" 
                    class="inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150">
                    <i class="fa-solid fa-trash"> <span class="ml-2">{{$t('Cancel')}}</span></i>
                    </Link>
                    </div>
                    </form>
                </div>
            </div>
        </div>

           
    </AppLayout>
</template>