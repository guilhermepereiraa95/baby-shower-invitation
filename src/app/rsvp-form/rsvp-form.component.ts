<form (ngSubmit)="submitForm()">
  <label for="name">Seu nome:</label>
  <input type="text" id="name" name="name" [(ngModel)]="guestName" required>

  <label for="attendance">Will you attend?</label>
  <select id="attendance" name="attendance" [(ngModel)]="attendance" required>
    <option value="yes">Yes</option>
    <option value="no">No</option>
  </select>

  <button type="submit">Submit</button>
</form>
