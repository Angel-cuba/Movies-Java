import React from 'react'
import { Button, Form } from 'react-bootstrap'

function ReviewForm({
  handleSubmit,
  reviewText,
  labelText,
  defaultValue
}) {
  return (
  <Form>
    <Form.Group controlId="exampleForm.ControlTextarea1" className='mb-3'>
      <Form.Label>{labelText}</Form.Label>
      <Form.Control as="textarea" rows={3} ref={reviewText} defaultValue={defaultValue}/>
    </Form.Group>
    <Button variant="outline-info" onClick={handleSubmit}>Submit</Button>
  </Form>
  )
}

export default ReviewForm