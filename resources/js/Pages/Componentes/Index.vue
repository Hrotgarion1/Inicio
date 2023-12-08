<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import DangerButton from "@/Components/DangerButton.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import SelectInput from "@/Components/SelectInput.vue";
import WarningButton from "@/Components/WarningButton.vue";
import Modal from "@/Components/Modal.vue";
import { Head, useForm } from "@inertiajs/vue3";
import { nextTick, ref } from "vue";
import Swal from "sweetalert2";
import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";
import LaraDashPagination from "@/Components/Pagination.vue";
import LaraDashTable from "@/Components/Table.vue";

//Buscador
import { watch, defineProps } from "vue";
import { router } from "@inertiajs/vue3";

//El prop de filters es para el buscador y el de comp es para las alertas
const props = defineProps({
    componentes: Object,
    productos: Object,
    filters: Object,
    comp: Object,
});
//para el buscador uso esta logica
let search = ref(props.filters.search);

watch(search, (value) => {
    router.get(
        "/componentes",
        { search: value },
        {
            preserveState: true,
            replace: true,
        }
    );
});
//hasta aqui
const nameInput = ref(null);
const modal = ref(false);
const title = ref("");
const operation = ref(1);
const id = ref("");

const form = useForm({
    code: "",
    name: "",
    cant: "",
    ubica: "",
    stock: "",
});
const formPage = useForm({});
const onPageClick = (event) => {
    formPage.get(route("componentes.index", { page: event }));
};
const openModal = (op, code, name, cant, ubica, stock, componente) => {
    modal.value = true;
    nextTick(() => nameInput.value.focus());
    operation.value = op;
    id.value = componente;
    if (op == 1) {
        title.value = "Crear componente";
    } else {
        title.value = "Editar componente";
        form.code = code;
        form.name = name;
        form.cant = cant;
        form.ubica = ubica;
        form.stock = stock;
    }
};
const closeModal = () => {
    modal.value = false;
    form.reset();
};
// const save = () =>{
//     if(operation.value == 1){
//         form.post(route('componentes.store'),{
//             onSuccess: () => {ok('Componente creado')}
//         });
//     }
//     else{
//         form.put(route('componentes.update',id.value),{
//             onSuccess: () => {ok('Componente actualizado')}
//         });
//     }
// }

//Logica para enviar las alertas despues de las validaciones, si cant es inferior a stock cambia las alertas de componente actualizado a enviar canvan a anna
let currentComp = ref(null);

const setCurrentComp = (comp) => {
    currentComp.value = comp;
};

const save = () => {
    const comp = currentComp.value;

    // Realizar la operación de guardar
    if (operation.value == 1) {
        form.post(route("componentes.store"), {
            onSuccess: () => {
                ok("Componente creado");
            },
        });
    } else {
        form.put(route("componentes.update", id.value), {
            onSuccess: () => {
                if (comp.cant > comp.stock) {
                    // Mostrar un mensaje adicional si la cantidad es menor que el stock
                    ok("Enviar canvan a Anna");
                } else {
                    ok("Componente actualizado");
                }
            },
        });
    }
};
//Hasta aquí para la validacion y las alertas

const ok = (msj) => {
    form.reset();
    //Si comento el "closeModal" hago que no se cierre cuando creo un nuevo componente, si lo descomento se cierra con cada nuevo registro
    closeModal();
    Swal.fire({ title: msj, icon: "success" });
};
const deleteComponente = (id, name) => {
    const alerta = Swal.mixin({
        buttonsStyling: true,
    });
    alerta
        .fire({
            title: "Estás seguro de eliminar " + name + " ?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: '<i class="fa-solid fa-check"></i> Si,eliminar',
            cancelButtonText: '<i class="fa-solid fa-ban"></i> Cancelar',
        })
        .then((result) => {
            if (result.isConfirmed) {
                form.delete(route("componentes.destroy", id), {
                    onSuccess: () => {
                        ok("Componente eliminado");
                    },
                });
            }
        });
};
</script>

<template>
    <Head :title="$t('Components')">
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        />
    </Head>
    <AppLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                {{ $t("Create and update Components") }}
            </h2>
        </template>

        <div class="py-1">
            <div
                v-if="$page.props.user.permissions.includes('crear componente')"
                class="bg-white grid v-screen place-items-center overflow-x-auto mx-auto sm:px-6 lg:px-8"
            >
                <div
                    class="bg-green-100 grid grid-cols-1 sm:grid-cols-2 py-4 px-4 sm:px-8 place-items-center overflow-hidden m-5 shadow-lg rounded-2xl"
                >
                    <div class="mt-3 mb-4">
                        <input
                            type="text"
                            v-model="search"
                            :placeholder="$t('Search component')"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 "
                        />
                    </div>

                    <div class="mt-3 mb-4 flex justify-self-end">
                        <PrimaryButton @click="openModal(1)">
                            <i class="fa-solid fa-plus-circle">
                                <span class="ml-2">{{ $t("Add") }}</span></i
                            >
                        </PrimaryButton>
                    </div>
                </div>
            </div>

            <div v-else class="bg-white grid v-screen place-items-center">
                <div
                    class="bg-green-100 grid grid-cols-1 sm:grid-cols-1 py-4 px-4 sm:px-8 place-items-center overflow-hidden m-5 shadow-lg rounded-2xl"
                >
                    <div class="mt-3 mb-4">
                        <input
                            type="text"
                            v-model="search"
                            :placeholder="$t('Search component')"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5"
                        />
                    </div>
                </div>
            </div>
            <div
                v-if="
                    $page.props.user.permissions.includes('eliminar componente')
                "
                class="bg-white grid v-screen place-items-center overflow-x-auto mx-auto sm:px-6 lg:px-8"
            >
                <LaraDashTable>
                    <template #col>
                        <th class="px-2 py-2">{{ $t("CODE") }}</th>
                        <th class="px-2 py-2">{{ $t("NAME") }}</th>
                        <th class="px-2 py-2">{{ $t("AMOUNT") }}</th>
                        <th class="px-2 py-2">{{ $t("LOCATION") }}</th>
                        <th class="px-2 py-2">{{ $t("MINIMUM STOCK") }}</th>
                        <th class="px-2 py-2"></th>
                        <th class="px-2 py-2"></th>
                    </template>
                    <template #row>
                        <tr
                            v-for="(comp, i) in componentes.data"
                            :key="comp.id"
                            class="text-gray-500 hover:bg-green-200"
                        >
                            <td class="border border-gray-400 px-2 py-2">
                                {{ comp.code }}
                            </td>
                            <td class="border border-gray-400 px-2 py-2">
                                {{ comp.name }}
                            </td>
                            <td class="border border-gray-400 px-2 py-2">
                                {{ comp.cant }}
                                <!-- Agregar lógica para mostrar alerta si comp.cant es menor que comp.stock -->
                                <span
                                    v-if="comp.cant < comp.stock"
                                    style="color: red; font-weight: bold"
                                    >¡Canvan!</span
                                >
                            </td>
                            <td class="border border-gray-400 px-2 py-2">
                                {{ comp.ubica }}
                            </td>
                            <td class="border border-gray-400 px-2 py-2">
                                {{ comp.stock }}
                            </td>
                            <td class="border border-gray-400 px-2 py-2">
                                <WarningButton
                                    @click="
                                        setCurrentComp(comp);
                                        openModal(
                                            2,
                                            comp.code,
                                            comp.name,
                                            comp.cant,
                                            comp.ubica,
                                            comp.stock,
                                            comp.id
                                        );
                                    "
                                >
                                    <i class="fa-solid fa-edit"></i>
                                </WarningButton>
                            </td>
                            <td class="border border-gray-400 px-2 py-2">
                                <DangerButton
                                    @click="
                                        deleteComponente(comp.id, comp.name)
                                    "
                                >
                                    <i class="fa-solid fa-trash"></i>
                                </DangerButton>
                            </td>
                        </tr>
                    </template>
                    <template #pagination>
                        <LaraDashPagination
                            :total="componentes.total"
                            :to="componentes.to"
                            :from="componentes.from"
                            :links="componentes.links"
                        />
                    </template>
                </LaraDashTable>
            </div>

            <div
                v-else
                class="bg-white grid v-screen place-items-center overflow-x-auto mx-auto sm:px-6 lg:px-8"
            >
                <LaraDashTable>
                    <template #col>
                        <th class="px-2 py-2">{{ $t("CODE") }}</th>
                        <th class="px-2 py-2">{{ $t("NAME") }}</th>
                        <th class="px-2 py-2">{{ $t("AMOUNT") }}</th>
                        <th class="px-2 py-2">{{ $t("LOCATION") }}</th>
                        <th class="px-2 py-2">{{ $t("MINIMUM STOCK") }}</th>
                        <th class="px-2 py-2"></th>
                    </template>
                    <template #row>
                        <tr
                            v-for="(comp, i) in componentes.data"
                            :key="comp.id"
                            class="text-gray-500 hover:bg-green-200"
                        >
                            <td class="border border-gray-400 px-2 py-2">
                                {{ comp.code }}
                            </td>
                            <td class="border border-gray-400 px-2 py-2">
                                {{ comp.name }}
                            </td>
                            <td class="border border-gray-400 px-2 py-2">
                                {{ comp.cant }}
                                <!-- Agregar lógica para mostrar alerta si comp.cant es menor que comp.stock -->
                                <span
                                    v-if="comp.cant <= comp.stock"
                                    style="color: red; font-weight: bold"
                                    >¡Canvan!</span
                                >
                            </td>
                            <td class="border border-gray-400 px-2 py-2">
                                {{ comp.ubica }}
                            </td>
                            <td class="border border-gray-400 px-2 py-2">
                                {{ comp.stock }}
                            </td>
                            <td class="border border-gray-400 px-2 py-2">
                                <WarningButton
                                    @click="
                                        setCurrentComp(comp);
                                        openModal(
                                            2,
                                            comp.code,
                                            comp.name,
                                            comp.cant,
                                            comp.ubica,
                                            comp.stock,
                                            comp.id
                                        );
                                    "
                                >
                                    <i class="fa-solid fa-edit"></i>
                                </WarningButton>
                            </td>
                        </tr>
                    </template>
                    <template #pagination>
                        <LaraDashPagination
                            :total="componentes.total"
                            :to="componentes.to"
                            :from="componentes.from"
                            :links="componentes.links"
                        />
                    </template>
                </LaraDashTable>
            </div>
        </div>
        <Modal :show="modal" @close="closeModal">
            <h2 class="bg-green-200 p-3 text-lg font.medium text-hray-900 justify-center">{{ title }}</h2>
            <div class="p-3 mt-6">
                <InputLabel for="code" :value="$t('Code')"></InputLabel>
                <TextInput
                    id="code"
                    ref="codeInput"
                    v-model="form.code"
                    type="text"
                    class="mt-1 block w-3/4"
                    :placeholder="$t('Code')"
                ></TextInput>
                <InputError
                    :message="form.errors.code"
                    class="mt-2"
                ></InputError>
            </div>
            <div class="p-3">
                <InputLabel for="name" :value="$t('Name')"></InputLabel>
                <TextInput
                    id="name"
                    ref="nameInput"
                    v-model="form.name"
                    type="text"
                    class="mt-1 block w-3/4"
                    :placeholder="$t('Name')"
                ></TextInput>
                <InputError
                    :message="form.errors.name"
                    class="mt-2"
                ></InputError>
            </div>
            <div class="p-3">
                <InputLabel for="cant" :value="$t('Quantity')"></InputLabel>
                <TextInput
                    id="cant"
                    v-model="form.cant"
                    type="text"
                    class="mt-1 block w-3/4"
                    :placeholder="$t('Quantity')"
                ></TextInput>
                <InputError
                    :message="form.errors.cant"
                    class="mt-2"
                ></InputError>
            </div>
            <div class="p-3">
                <InputLabel for="ubica" :value="$t('Location')"></InputLabel>
                <TextInput
                    id="ubica"
                    v-model="form.ubica"
                    type="text"
                    class="mt-1 block w-3/4"
                    :placeholder="$t('Location')"
                ></TextInput>
                <InputError
                    :message="form.errors.ubica"
                    class="mt-2"
                ></InputError>
            </div>
            <div class="p-3">
                <InputLabel for="stock" :value="$t('Minimum Stock')"></InputLabel>
                <TextInput
                    id="stock"
                    v-model="form.stock"
                    type="text"
                    class="mt-1 block w-3/4"
                    :placeholder="$t('Minimum Stock')"
                ></TextInput>
                <InputError
                    :message="form.errors.stock"
                    class="mt-2"
                ></InputError>
            </div>
            <div class="px-4 pt-2 pb-4">
                <PrimaryButton :disabled="form.processing" @click="save">
                    <i class="fa-solid fa-save"> <span class="ml-2">{{$t('Save')}}</span></i>
                </PrimaryButton>

                <DangerButton
                    class="ml-3"
                    :disabled="form.processing"
                    @click="closeModal"
                ><i class="fa-solid fa-trash"><span class="ml-2">{{$t('Cancel')}}</span></i>
                    
                </DangerButton>
            </div>
        </Modal>
    </AppLayout>
</template>
