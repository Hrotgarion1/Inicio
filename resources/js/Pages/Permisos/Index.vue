<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
// import { Head } from '@inertiajs/inertia-vue3';
import LaraDashTable from "@/Components/Table.vue";
import LaraDashPagination from "@/Components/Pagination.vue";

const props = defineProps({
    permisos: Object,
});
const permisos = props.permisos;
</script>

<template>
    <AppLayout :title="$t('Permissions')">
        <template #header>
            <h2
                class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"
            >
                {{ $t("Permissions") }}
            </h2>
        </template>
        <div class="py-1">
            <div
                class="bg-white grid v-screen place-items-center overflow-x-auto mx-auto sm:px-6 lg:px-8"
            >
                <LaraDashTable>
                    <template #col>
                        <th class="px-2 py-2">ID</th>
                        <th class="px-2 py-2">{{ $t("Name") }}</th>
                    </template>
                    <template #row>
                        <tr
                            v-for="p in permisos.data"
                            :key="p.id"
                            class="text-gray-500 hover:bg-gray-600"
                        >
                            <td class="border border-gray-400 px-2 py-2">
                                {{ p.id }}
                            </td>
                            <td class="border border-gray-400 px-2 py-2">
                                {{ p.name }}
                            </td>
                        </tr>
                    </template>
                    <template #pagination>
                        <LaraDashPagination
                            :total="permisos.total"
                            :to="permisos.to"
                            :from="permisos.from"
                            :links="permisos.links"
                        />
                    </template>
                </LaraDashTable>
            </div>
        </div>
    </AppLayout>
</template>
