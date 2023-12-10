<template>
  <div>
    <!-- Itera sobre cada producto y muestra una tarjeta para cada uno -->
    <div v-for="pro in productos?.data || []" :key="pro.id">
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a :href="route('productos.edit', pro.id)">
          <img :src="'/storage/img/LOGOR3.png'" alt="logo">
        </a>
        <div class="p-5 text-xs">
          <div class="flex mb-2">
            <p>
              <h5 class="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">{{$t('CODE')}}</h5>
            </p>
            <p>{{ pro.code }}</p>
          </div>
          <div class="flex mb-2">
            <p>
              <h5 class="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">{{$t('NAME')}}</h5>
            </p>
            <p>{{ pro.name }}</p>
          </div>
          <!-- Otras líneas similares para el resto de la información -->
          <div class="flex mb-2">
            <p>
              <h5 class="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">{{$t('AMOUNT')}}</h5>
            </p>
            <p>{{ pro.cant }}</p>
          </div>
          <div class="flex mb-2">
            <p>
              <h5 class="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">{{$t('MINIMUM STOCK')}}</h5>
            </p>
            <p>{{ pro.stock }}</p>
          </div>
          <!-- ... Agrega más líneas según sea necesario ... -->
          <div class="flex">
            <!-- Enlaces para editar y eliminar -->
            <a :href="route('productos.edit', pro.id)" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <i class="fa-solid fa-edit"></i>
            </a>
            <a @click="deleteProducto(pro.id, pro.code, pro.name, pro.cant, pro.ubica, pro.util, pro.sitio, pro.descript)" class="inline-flex ml-10 items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
              <i class="fa-solid fa-trash"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    
    
  </div>
</template>

<script>
export default {
  props: {
    productos: Object, // Asegúrate de pasar esta prop desde el componente padre
  },
  methods: {
    deleteProducto(id, code, name, cant, ubica, util, sitio, descript) {
      // Lógica para eliminar un producto
    },
  },
};
</script>
