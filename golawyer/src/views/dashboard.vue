<template>
  <!-- <reservations :reservations="reservations" /> -->
  <h1>Welcome to GoLawyer</h1>

  <div class="container-sm mt-3">
    <form>
      <label for="typeSelect"
        >Please select the type of lawyer you wish to visit</label
      >
      <select class="form-control form-control-lg" id="typeSelect">
        <option disabled selected>Select lawyer type</option>
        <option>Personal Injury</option>
        <option>Estate Planning</option>
        <option>Bankruptcy</option>
        <option>Employment</option>
        <option>Tax attorney</option>
        <option>Medical Malpractice</option>
      </select>

      <div class="d-flex form-row justify-content-around mt-3">
        <div class="col">
          <label for="dateSelect">
            Please select the date you wish to visit
          </label>
          <input
            type="text"
            placeholder="Date"
            :min="min"
            v-model="selected_date"
            @input="checkDate"
            onfocus="(this.type='date')"
            onblur="(this.type='text')"
            class="form-control form-control-lg"
            style="width: 97%"
            id="dateSelect"
            required
          />
        </div>

        <div class="col">
          <label for="typeSelect"
            >Please select the time you wish to visit</label
          >
          <select
            style="width: 100%"
            class="form-control form-control-lg"
            id="typeSelect"
            required
          >
            <option disabled selected>Select time you wish to visit</option>
            <option>to fill</option>
          </select>
        </div>
      </div>
      <button
        :disabled="!isvalid_date"
        class="w-50 btn btn-lg btn-dark my-3"
        type="submit"
      >
        Add new reservation
      </button>
    </form>
    <!-- <button class="w-50 btn btn-lg btn-outline-danger " >Cancel</button> -->
  </div>

  <div>
    <table
      class="
        container
        mt-6
        table table-striped table-dark table-hover table-responsive
      "
    >
      <thead>
        <tr>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Reservation ID</th>
          <th scope="col">Reservation Type</th>
          <th scope="col">Reservation Date</th>
          <th scope="col">Reservation Time</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>First name</td>
          <td>Last name</td>
          <th scope="row">1</th>
          <td>Type</td>
          <td>Date</td>
          <td>Time</td>
          <td>
            <button class="w-100 btn btn-sm btn-danger" type="button">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>



<script>
import { ref } from "vue";

export default {
  setup() {
    const isvalid_date = ref(false);

    const now = new Date();
    now.setDate(now.getDate() + 7);

    const min = ref("");
    min.value = now.toISOString().split("T")[0];

    const selected_date = ref("");

    const checkDate = () => {
      const date = new Date(selected_date.value).getDay();

      if ([6, 0].includes(date)) {
        selected_date.value = "";
        isvalid_date.value = false;
        return;
      }

      isvalid_date.value = true;
    };

    return {
      min,
      checkDate,
      selected_date,
      isvalid_date,
    };
  },
};

</script>

