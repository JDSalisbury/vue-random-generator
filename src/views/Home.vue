<template>
  <div>
    <v-file-input
      class="mr-12 file-input"
      show-size
      label="File input"
      @change="selectFile"
    ></v-file-input>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      headers: [],
      desserts: []
    };
  },

  components: {},
  methods: {
    selectFile(file) {
      function parseFile(file) {
        return new Promise((resolve, reject) => {
          let content;
          let headers = [];
          let lineItems =[];
          const reader = new FileReader();
          reader.onloadend = function(e) {
            let headerLine = e.target.result.split('\n')[0];

            let headerList = headerLine.split(',');

            let headerCount = headerList.length;
            
            headerList.map((item) => {
              headers.push({
                text: item,
                value: item
              });
            });

            let lineItemList = e.target.result.split('\n');
            lineItemList.shift();

            lineItemList.map((listItem) => {

              let createLineitem = {};
              let headerStep = 0
              listItem.split(',').map((item) => {
                createLineitem[headerList[headerStep]] = item
                headerStep++
              });


              lineItems.push(createLineitem)
            });

            content = { headers: headers, lineItems: lineItems };

            resolve(content);
          };
          reader.onerror = function(e) {
            reject(e);
          };
          reader.readAsText(file);
        });
      }
      parseFile(file).then(
        (result) => (console.log(result), (this.headers = result.headers), (this.desserts = result.lineItems)),
        (error) => alert(error)
      );
    }
  }
};
</script>

<style></style>
