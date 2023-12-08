<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import { Link } from '@inertiajs/vue3';
import TextInput from '@/Components/TextInput.vue';
import { Head,useForm } from '@inertiajs/vue3';

const form = useForm({
    code:'',
    name:'',
    cant:'',
    stock:'',
    ubica:'',
    util:'',
    sitio:'',
    descript:'',
});
</script>

<template>
    <Head :title="$t('Create Product')" />

    <AppLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">{{$t('Create Product')}}</h2>
        </template>

        <div class="py-12">
            <div class="max-w-xl mx-auto sm:px-6 lg:px-8">
                <div class="p-4 bg-green-100 overflow-hidden shadow-sm sm:rounded-lg">
                    <form @submit.prevent="form.post(route('productos.store'))"
                    class="mt-6 space-y-2 max-w-xl">
                    <InputLabel for="code" :value="$t('Code')"></InputLabel>
                    <TextInput id="code" v-model="form.code" autofocus required
                    type="text"
                    class="mt-1 block w-full"></TextInput>
                    <InputError :message="form.errors.code" class="mt-2"></InputError>

                    <InputLabel for="name" :value="$t('Name')"></InputLabel>
                    <TextInput id="name" v-model="form.name" autofocus required
                    type="text"
                    class="mt-1 block w-full"></TextInput>
                    <InputError :message="form.errors.name" class="mt-2"></InputError>

                    <InputLabel for="cant" :value="$t('Quantity')"></InputLabel>
                    <TextInput id="cant" v-model="form.cant" autofocus required
                    type="text"
                    class="mt-1 block w-full"></TextInput>
                    <InputError :message="form.errors.cant" class="mt-2"></InputError>

                    <InputLabel for="stock" :value="$t('Minimum Stock')"></InputLabel>
                    <TextInput id="stock" v-model="form.stock" autofocus required
                    type="text"
                    class="mt-1 block w-full"></TextInput>
                    <InputError :message="form.errors.cant" class="mt-2"></InputError>

                    <InputLabel for="ubica" :value="$t('Location')"></InputLabel>
                    <TextInput id="ubica" v-model="form.ubica" autofocus required
                    type="text"
                    class="mt-1 block w-full"></TextInput>
                    <InputError :message="form.errors.ubica" class="mt-2"></InputError>

                    <InputLabel for="util" :value="$t('Jig')"></InputLabel>
                    <TextInput id="util" v-model="form.util" autofocus required
                    type="text"
                    class="mt-1 block w-full"></TextInput>
                    <InputError :message="form.errors.util" class="mt-2"></InputError>

                    <InputLabel for="sitio" :value="$t('Location of the jig')"></InputLabel>
                    <TextInput id="sitio" v-model="form.sitio" autofocus required
                    type="text"
                    class="mt-1 block w-full"></TextInput>
                    <InputError :message="form.errors.sitio" class="mt-2"></InputError>

                    <InputLabel for="descript" :value="$t('Notes')"></InputLabel>
                    <TextInput id="descript" v-model="form.descript" autofocus required
                    type="text"
                    class="mt-1 block w-full"></TextInput>
                    <InputError :message="form.errors.descript" class="mt-2"></InputError>
                    <div class="px-2 py-2">
                    <PrimaryButton :disabled="form.processing" class="mx-2">
                        <i class="fa-solid fa-save"><span class="ml-2">{{$t('Save')}}</span> </i>
                    </PrimaryButton>

                    <Link :href="route('productos.index')" 
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