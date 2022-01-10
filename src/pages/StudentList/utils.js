
/**
 * 
 * @param {*} filter  可选参数， 类型为 { name: string, address:string }
 *      - @name string 名字模糊查询参数 不传或者传''默认搜索所有。 
 *      - @address string 地址模糊查询参数 不传或者传''默认搜索所有。    
 * @returns 
 */
export const xGetStudent = (filter = {}) => {
  return fetch("http://127.0.0.1:7001/student/getList")
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      const { results = [] } = result;
      let res = results;
      const { name, address } = filter;
      if (name) {
        res = res.filter((item) => {
          return (item.name.first + " " + item.name.last).indexOf(name) > -1;
        });
      }
      if (address) {
        res = res.filter((item) => {
          return (
            (item.location.country + " " + item.location.city).indexOf(
              address
            ) > -1
          );
        });
      }
      return res;
    });
};

export default {
  xGetStudent,
};
