<script>
export default {

}
</script>

<template>
    <div class="bg-green-100 grid py-2 v-screen place-items-center overflow-hidden m-5 shadow-lg rounded-2xl">
      <div class="bg-green-100 my-4 grid v-screen place-items-center overflow-x-auto mx-auto sm:px-6 lg:px-8">
        <table class="table-auto py-2 border border-gray-400">
          <thead>
            <tr class="bg-gray-100">
              <slot name="col"></slot>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-100">
            <slot name="row"></slot>
          </tbody>
        </table>
      </div>
      <slot class="py-2" name="pagination"></slot>
    </div>
  </template>

