<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Link, useForm, Head } from '@inertiajs/vue3';
import Swal from 'sweetalert2';
import { ref, watch, onMounted } from 'vue';

const props = defineProps({ producto: { type:Object } });

const form = useForm({
    id:props.producto.id,
    code:props.producto.code,
    name:props.producto.name,
    cant:props.producto.cant,
    stock:props.producto.stock,
    ubica:props.producto.ubica,
    util:props.producto.util,
    sitio:props.producto.sitio,
    descript:props.producto.descript,
});

// Indicador para controlar si se ha enviado el formulario
const formSubmitted = ref(false);

// Para el sweetalert
watch(() => formSubmitted.value, (submitted) => {
  if (submitted) {
    // Convierte a cadena y realiza la lógica necesaria aquí
    const cantAsString = form.cant.toString();
    if (form.cant <= form.stock) {
      showCanvanAlert(cantAsString);
    }
    // Reinicia el indicador después de mostrar la alerta
    formSubmitted.value = false;
  }
});

const handleSubmit = async () => {
  // Establece el indicador antes de enviar el formulario
  formSubmitted.value = true;

  try {
    await form.patch(route('productos.update', { producto: form.id }));

    // Restablece el formulario después de enviar con éxito
    form.reset();

    // Redirecciona a la página de índice después de cerrar la alerta
    const result = await showCanvanAlert(form.id);
    if (result && result.isConfirmed) {
      // Utiliza el objeto router para redirigir a la página de índice
      router.push(route('productos.index'));
    }
  } catch (error) {
    // Maneja errores si es necesario
    console.error('Error al enviar el formulario:', error);
  }
};

const showCanvanAlert = () => {
  if (form.cant > form.stock) {
    Swal.fire({
      title: 'Avisar a Luis',
      icon: 'info',
      confirmButtonText: '<i class="fa-solid fa-check"></i> Entendido',
    });
  }
};
</script>

<template>
    <Head :title="$t('Product Edit')" />

    <AppLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">{{$t('Product Edit')}}</h2>
        </template>

        <div class="py-12">
            <div class="max-w-xl mx-auto sm:px-6 lg:px-8 ">
                <div class="p-4 bg-green-100 overflow-hidden shadow-sm sm:rounded-lg">
                    <form @submit.prevent="handleSubmit"
                    class="mt-6 space-y-6 max-w-xl">
                    <InputLabel v-if="$page.props.user.permissions.includes('eliminar producto')" for="code" :value="$t('Code')"></InputLabel>
                    <TextInput v-if="$page.props.user.permissions.includes('eliminar producto')" id="code" v-model="form.code" autofocus required
                    type="text"
                    class="mt-1 block w-full"></TextInput>
                    <InputError :message="form.errors.code" class="mt-2"></InputError>

                    <InputLabel v-if="$page.props.user.permissions.includes('eliminar producto')" for="name" :value="$t('Name')"></InputLabel>
                    <TextInput v-if="$page.props.user.permissions.includes('eliminar producto')" id="name" v-model="form.name" autofocus required
                    type="text"
                    class="mt-1 block w-full"></TextInput>
                    <InputError :message="form.errors.name" class="mt-2"></InputError>

                    <InputLabel for="cant" :value="$t('Quantity')"></InputLabel>
                    <TextInput id="cant" v-model="form.cant" :value="form.cant.toString()" autofocus required
                    type="text"
                    class="mt-1 block w-full"></TextInput>
                    <InputError :message="form.errors.cant" class="mt-2"></InputError>

                    <InputLabel for="stock" :value="$t('Minimum Stock')"></InputLabel>
                    <TextInput id="stock" v-model="form.stock" :value="form.stock.toString()" autofocus required
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