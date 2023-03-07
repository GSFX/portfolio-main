import React from 'react';
import './Contacts.css';

export default function Contacts() {
  return (
    <div class="container">
      <div class="row">
        <h1>Contact me</h1>
      </div>
      <div class="row input-container">
        <div class="col-xs-12">
          <div class="styled-input wide">
            <input type="text" required />
            <label>Name</label>
          </div>
        </div>
        <div class="col-xs-12">
          <div class="styled-input">
            <input type="text" required />
            <label>Email</label>
          </div>
        </div>
        <div class="col-xs-12">
          <div class="styled-input wide">
            <textarea required></textarea>
            <label>Message</label>
          </div>
        </div>
        <div class="col-xs-12">
          <div class="btn-lrg submit-btn">Send Message</div>
        </div>
      </div>
    </div>
  );
}
