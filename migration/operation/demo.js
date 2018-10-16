module.exports = (knex) => {
  return [
    {
      opt: 'create',
      table: 'users',
      column: {
        id: {type: 'increments'},
        user_name: {type: 'string', length: '32', comment: '用户名'},
        created_at: {type: 'timestamp', comment: '创建时间'},
        updated_at: {type: 'datetime', comment: '更新时间'},
        deleted_at: {type: 'datetime', comment: '删除时间'}
      }
    },
    {
      opt: 'addColumn',
      table: 'users',
      field: 'real_name',
      content: {
        type: 'string',
        length: '64',
        comment: '真实姓名',
        after: 'user_name'
      }
    }
  ]
}
