module.exports = {
  itemList: `select * from table_name`,
  itemDetail: `select * from table_name where id=?`,
  itemInsert: `insert into table_name set ?`,
  itemUpdate: `update table_name set ? where id=?`,
  itemDelete: `delete from table_name where id=?`,
};
