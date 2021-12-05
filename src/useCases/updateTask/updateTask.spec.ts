import { UpdateTaskService } from "./updateTaskService";

describe('Should test Update Task', ()=>{
  const update = new UpdateTaskService();

  it('Should return success on description update', async()=>{
    const payload = { description: 'teste update description' }
    const id = '619c5619edab8c10c0641994'

    const updatedTask = await update.execute(id, payload)
    expect(updatedTask).toMatchObject({description: 'teste update description'})

    
  })

  it('Should return success in update of done and undone', async()=>{
    const payload = { done: false }
    const id = '619c5619edab8c10c0641994'

    const updatedTask = await update.execute(id, payload)
    expect(updatedTask).toMatchObject({done: false})

    
  })

  it('Should return success in update task', async()=>{
    const payload = { done: false, description: 'teste update full task' }
    const id = '619c5619edab8c10c0641994'

    const updatedTask = await update.execute(id, payload)
    expect(updatedTask).toMatchObject({done: false, description: 'teste update full task' })
    
  })

  it('Should return error on update', async()=>{
    const payload = { done: false, description: 'teste update failed' }
    try {
      await update.execute('', payload)
    } catch (error) {
      expect(error)
    }
    
  })
})