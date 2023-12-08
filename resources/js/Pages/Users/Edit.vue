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
    <AppLayout :title="$t('Edit')">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
        {{$t('Assign roles to users')}}
            </h2>
        </template>

           
    </AppLayout>
</template>