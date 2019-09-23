<template>
  <div class="hello">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <input
            type="text"
            placeholder="Enter Name"
            v-model="name"
            class="form-control"
            @keyup.enter="addName"
          />

          <ul>
            <li v-for="(uniqueName,key) in names" :key="key">
              <h2>{{uniqueName.name}}</h2>
              <button class="btn btn-xs btn-primary" @click="editFormMode.push(key)">Edit</button>
              <button class="btn btn-xs btn-danger" @click="deleteName(key)">Delete</button>
              <br />
              <br />
              <input
                type="text"
                v-if="editFormMode.includes(key)"
                v-model="editForm[key]"
                class="form-control"
                @keyup.enter="editName(key)"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      name: null,
      names: [],
      editForm: [],
      editFormMode: []
    };
  },
  methods: {
    addName() {
      firebase
        .database()
        .ref("names")
        .push({ name: this.name })
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.log(error);
        });
    },

    editName(key) {
      firebase
        .database()
        .ref("names/" + key)
        .set({
          name: this.editForm[key]
        })
        .then(data => {
          this.editForm[key] = null;
          this.editFormMode = [];
        });
      this.editForm = [];
    },

    deleteName(key) {
      firebase
        .database()
        .ref("names/" + key)
        .remove();
    }
  },
  created() {
    firebase
      .database()
      .ref("names")
      .on("value", snapshot => {
        //console.log(snapshot.val());
        this.names = snapshot.val();
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
