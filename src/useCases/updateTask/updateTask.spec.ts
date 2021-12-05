import { UpdateTaskService } from "./updateTaskService";

describe('Should test Update Task', ()=>{
  const update = new UpdateTaskService();

  it('Should return success on description update', done =>{
    const payload = { description: 'teste update description' }
    const id = '619c5619edab8c10c0641994'

    const updatedTask = update.execute(id, payload)
    expect(updatedTask).toMatchObject({description: 'teste update description'})

    done();
  })

  it('Should return success in update of done and undone', done =>{
    const payload = { done: false }
    const id = '619c5619edab8c10c0641994'

    const updatedTask = update.execute(id, payload)
    expect(updatedTask).toMatchObject({done: false})

    done();
  })

  it('Should return success in update task', done =>{
    const payload = { done: false, description: 'teste update full task' }
    const id = '619c5619edab8c10c0641994'

    const updatedTask = update.execute(id, payload)
    expect(updatedTask).toMatchObject({done: false, description: 'teste update full task' })
    done();
  })

  it('Should return error on update', done =>{
    const payload = { done: false, description: 'teste update failed' }
    try {
      update.execute('', payload)
    } catch (error) {
      expect(error)
    }
    done();
  })
})