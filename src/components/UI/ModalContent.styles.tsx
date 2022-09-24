import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: row;
    width: fit-content;
    width: 90%;
    margin-right: 2%;
    display: inline;
    label {
        text-align: left;
        font-family: system-ui;
        color: #f65261;
        font-weight: 300;
        font-size: large;
    }
    input {
        width: 100%;
        height: 3.25rem;
        margin-top: 10px;
        background-color: #424242;
        border: none;
        border-radius: 3px;
        font-size: larger;
        padding-left: 20px;
    } 
    .modalTitle {
        font-size: xxx-large;
        margin: 3%;
        font-weight: 100;
        font-family: system-ui;
        color: white;
    }

    .textInput{
        display: flex;
        flex-direction: column;
        margin-top: 25px;
    }
    .rowWrapper {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        width: 100%;
        padding-left: 30px;
    }
    .firstColumn {
        width: 60%;
    }
    .secondColumn {
        margin-left: 5%;
        input[type="date"]::-webkit-calendar-picker-indicator {
            filter: invert(0.7);
            
        }

    }

    .textArea {
        width: 95%;
        margin-top: 25px;
    }
    textarea {
        width: 93%;
        background-color: #424242;
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        font-size: larger;
        border: none;
       
    }
    .submitSection {
        margin-top: 30px;
        display: flex;
        justify-content: flex-end;
        width: 92%;
        .buttonClass {
            background-color: #424242;  
            color: #f65261;
            border-style: none;
            border-radius: 3px;
        }
        Button {
            height: 38px;
            width: 10%;
            margin-left: 2%;
        }
        .resetButton {
            border-style: ridge;
            border-color: #f65261;

        }
        .submitButton {
            background-color: #f65261;
            color: #FFFFFF;
        }
    }
    }
    .calendarInput {
        width: 222px;
    }
   
`;
export const GenreControl = styled.div`
  select {
    background: #424242;
    color: #ffffff;
    border: none;
    font-family: system-ui;
    height: 3.25rem;
    margin-top: 10px;
    border-radius: 2px;
    padding-left: 20px;
    width: 100%;
    font-size: large;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: "";
  }

  .checkBox {
    height: 15px;
    width: 15px;
  }
  .multiselect {
    width: 100%;
  }

  .selectBox {
    position: relative;
  }

  .selectBox select {
    width: 100%;
  }

  .arrowDown {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    left: 95%;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 20px solid #f65261;
    poition: absolute;
    top: 29px;
  }

  .arrowUp {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    left: 95%;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 20px solid #f65261;
    poition: absolute;
    top: 29px;
  }

  #checkboxes {
    display: none;
    border: 1px #dadada solid;
  }

  #checkboxes label {
    display: block;
    color: #ffffff;
  }

  input[type="checkbox"] {
    accent-color: #f65261;
  }
`;

export const InputErrorMessage = styled.span`
  width: 100%;
`;
