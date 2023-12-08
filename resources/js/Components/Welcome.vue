<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
</script>

<template>
    <div>
        <div class="p-6 lg:p-8 bg-green-200 dark:bg-gray-800 dark:bg-gradient-to-bl dark:from-gray-700/50 dark:via-transparent border-b border-gray-200 dark:border-gray-700">
            <ApplicationLogo class="block h-24 w-auto" />

            <h1 class="mt-8 text-2xl font-medium text-blue-900 dark:text-white">
                {{ $t('Welcome to TCXStocks') }}
            </h1>

            <p class="mt-6 text-gray-500 dark:text-gray-400 leading-relaxed">
                {{$t('TCXStock is an application for stock control of...')}}
            </p>
        </div>

        <div class="bg-gray-200 dark:bg-gray-800 bg-opacity-25 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 p-6 lg:p-8">
            <div>
                <div class="flex items-center">
                    <h2 class="ms-3 text-xl font-semibold text-blue-900 dark:text-white">
                        <a :href="route('productos.index')">{{$t('Products')}}</a>
                    </h2>
                </div>

                <p class="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                    {{$t('In this section we can create, update and delete products, we can also see what their components are and where to find the necessary tools to manufacture them.')}}
                </p>

                <p class="mt-4 text-sm">
                    <a :href="route('productos.index')" class="inline-flex items-center font-semibold text-indigo-700 dark:text-indigo-300">
                        {{$t('Go to products...')}}

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="ms-1 w-5 h-5 fill-indigo-500 dark:fill-indigo-200">
                            <path fill-rule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clip-rule="evenodd" />
                        </svg>
                    </a>
                </p>
            </div>

            <div>
                <div class="flex items-center">
                    
                    <h2 class="ms-3 text-xl font-semibold text-blue-900 dark:text-white">
                        <a :href="route('componentes.index')">{{$t('Components')}}</a>
                    </h2>
                </div>

                <p class="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                    {{$t('In this section we can create, update and delete components, as well as see their current location.')}}
                </p>

                <p class="mt-4 text-sm">
                    <a :href="route('componentes.index')" class="inline-flex items-center font-semibold text-indigo-700 dark:text-indigo-300">
                        {{$t('Go to components...')}}

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="ms-1 w-5 h-5 fill-indigo-500 dark:fill-indigo-200">
                            <path fill-rule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clip-rule="evenodd" />
                        </svg>
                    </a>
                </p>
            </div>

            <div>
                <div class="flex items-center">
                    
                    <h2 class="ms-3 text-xl font-semibold text-blue-900 dark:text-white">
                        <a :href="route('reports')">{{$t('Reports')}}</a>
                    </h2>
                </div>

                <p class="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                    {{$t('Generate reports and download them in excel, pdf or simply print them.')}}
                </p>

                <p class="mt-4 text-sm">
                    <a :href="route('reports')" class="inline-flex items-center font-semibold text-indigo-700 dark:text-indigo-300">
                        {{$t('Go to reports...')}}

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="ms-1 w-5 h-5 fill-indigo-500 dark:fill-indigo-200">
                            <path fill-rule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clip-rule="evenodd" />
                        </svg>
                    </a>
                </p>
            </div>

            <div>
                <div class="flex items-center">
                    
                    <h2 class="ms-3 text-xl font-semibold text-blue-900 dark:text-white">
                        <a href="https://tcx.cat/">{{$t('See TCX.cat page')}}</a>
                    </h2>
                </div>

                <p class="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                    {{$t('If you wish, from this link you can visit the official TXC website and see our latest designs and products.')}}
                </p>

                <p class="mt-4 text-sm">
                    <a href="https://tcx.cat/" class="inline-flex items-center font-semibold text-indigo-700 dark:text-indigo-300">
                        {{$t('Go to TCX.cat page')}}

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="ms-1 w-5 h-5 fill-indigo-500 dark:fill-indigo-200">
                            <path fill-rule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clip-rule="evenodd" />
                        </svg>
                    </a>
                </p>
            </div>
        </div>
    </div>
</template>
