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

const deleteClick = event => {
    // event.preventDefault();

    const deleteNote = () => {

        $.delete({
            url: "/api/notes",
            method: "DELETE",
        }).then(() => {
            $(".list-group").empty();
            console.log("Notes erased!");
        })

    }

}


//Ajax calls

const noteDataQuery = event => {
    // event.preventDefault();

    $.get({
        url: "/api/notes",
        method: "GET"
    }).then(noteData => {
        for (let i = 0; i < noteData.length; i++) {
            let title = $("<h5>").text(noteData[i].title);
            let notes = $('<p>').text(noteData[i].notes);
            let btn = $('<button class= "fas fa-eraser">')
                .text('Delete')
                .click(() => { deleteNote })
            $(".list-group").append(title, notes, btn);
        }
    })
}






noteDataQuery();
deleteClick();

// $.get("/api/notes/", function (notes) {
//     console.log(notes);
// })

// $("#save").click(function () {
//     const obj = {
//         title: $("#nTitle").val(),
//         notes: $("#nText").val()
//     }
//     $.post("/api/notes", obj)
// })