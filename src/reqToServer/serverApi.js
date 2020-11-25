import axios from "axios";
export class getApiPhone {
  async getList() {
    try {
      return await axios.get("http://localhost:9090/contacts", {
        headers: { "content-type": "application/json" },
      });
    } catch {
      console.log("ошибка подключения");
    }
  }
  async deletCont(id) {
    try {
      return await axios.delete(`http://localhost:9090/contacts/${id}`);
    } catch {
      console.log("ошибка удаления");
    }
  }
  async addPost(name, num) {
    try {
      return await axios.post(`http://localhost:9090/contacts`, {
        name: name,
        num: num,
      });
    } catch {
      console.log("новый юзер небыл додан");
    }
  }
}
