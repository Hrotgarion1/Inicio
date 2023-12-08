<script>
import { Link } from '@inertiajs/vue3'

export default {
  props: {
    links: Array,
    total: Number,
    to: Number,
    from: Number
  },
  components: {
    Link
  },
  data() {
    return {
      paginasMostradas: 10,
    };
  },
  computed: {
    paginasVisibles() {
      const paginas = this.links.slice(0, this.paginasMostradas);

      // Asegura que siempre haya un enlace "previous" y "next" visibles
      if (this.links.length > this.paginasMostradas) {
        if (!this.contieneEtiqueta(paginas, this.links[0])) {
          paginas.unshift(this.links[0]);
        }
        if (!this.contieneEtiqueta(paginas, this.links[this.links.length - 1])) {
          paginas.push(this.links[this.links.length - 1]);
        }
      }

      return paginas;
    },
  },
  methods: {
    contieneEtiqueta(array, elemento) {
      return array.some(item => item.label === elemento.label);
    },
  },
};
</script>

<template>
  <div class="bg-green-100 py-2 text-xs text-gray-600 grid v-screen place-items-center overflow-x-auto mx-auto sm:px-6 lg:px-8" v-if="links.length > 3">
    <span class="flex py-2 items-center col-span-3">
      {{$t('Showing')}} {{ from }}-{{ to }} {{$t('of')}} {{ total }}
    </span>
    <span class="col-span-2"></span>
    <span class="flex col-span4 mt-2 sm:mt-auto sm:justify-end">
      <nav aria-label="Table navigation">
        <ul class="inline-flex items-center">
          <li v-for="(link, k) in paginasVisibles" :key="k">
            <div v-if="link.url == null" class="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-blue" v-html="link.label" />
            <Link v-else class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-blue" :class="{'bg-blue-700 text-white': link.active}" :href="link.url" v-html="link.label" />
          </li>
        </ul>
      </nav>
    </span>
  </div>
</template>





