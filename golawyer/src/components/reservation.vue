<template>

<div>
    <table class="container table table-striped table-dark table-hover table-responsive">
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
            <td>{{reservation.first_name}}</td>
            <td>{{reservation.last_name}}</td>
            <th scope="row">{{reservation.id}}</th>
            <td>{{reservation.reservation_type}}</td>
            <td>{{reservation.reservation_date}}</td>
            <td>{{reservation.reservation_time}}</td>
            <td><button class="w-100 btn btn-sm btn-danger" type="button">Delete</button></td>
            </tr>
        </tbody>
    </table>
</div>



</template>

<script>
export default {
    name: 'reservation',
    props: {
        reservation: Object
    }
}
</script>