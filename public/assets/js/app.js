// const express = require("express");
// const router = express.Router();

// Save note button HTML element 
const submitBtnClick = $('#save');
const $deleteButton = $("#list-notes");


// Event listener for when the Save button clicked on the page, it will then send an AJAX call and post the data in the forms to notepad_db..
const handleSubmitBtn = event => {
    event.preventDefault();

    let newNote = {
        title: $('#nTitle').val().trim(),
        notes: $('#nText').val().trim(),
    }

    $.ajax({
        url: "/api/notes",
        method: "POST",
        data: newNote
    }).then(function (data) {
        console.log(data);

        if (data) {
            alert("Note Saved..");
        }

        $("#nTitle").val("");
        $("#nText").val("");
    })


}

submitBtnClick.on("click", handleSubmitBtn);

// Event listener for the delete button that will send an AJAX call to delete data from notepad_db

function deleteClick(event) {
    // event.preventDefault();

    // read id from btn clicked
    const noteId = $(this).attr("data-id");
    console.log(this);
    console.log(noteId);
    $.ajax({
        url: "/api/notes/" + noteId,
        method: "DELETE",
    }).then(() => {
        console.log("Notes erased!");
        noteDataQuery();
    })



}


//Ajax calls

const noteDataQuery = event => {
    // event.preventDefault();
    $(".list-group").empty();
    $.get({
        url: "/api/notes",
        method: "GET"
    }).then(noteData => {
        console.log(noteData);
        for (let i = 0; i < noteData.length; i++) {
            let title = $("<h5>").text(noteData[i].title);
            let notes = $('<p>').text(noteData[i].notes);
            let btn = $('<button class= "fas fa-eraser delete-btn">')
                .attr("data-id", noteData[i].id)
                .text('Delete')
            $(".list-group").append(title, notes, btn);
        }
    })
}


// Running Queries

noteDataQuery();


// add delete btn event listener
$(document).on("click", ".delete-btn", deleteClick);