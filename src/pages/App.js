import { useState } from 'react';
import Input from '../Components/Input';
import ItemRepo from '../Components/ItemRepo';
import logoGit from '../assets/logo-git.png';
import { Container } from './styles';
import Button from '../Components/Button';
import { api }  from '../services/api';
const App = () => {
  const [repos,setRepos] = useState([]);
  const [currentRepo,setcurrentRepo] = useState('');

  const handleSearchRepo = async() =>{
    const {data} = await api.get(`repos/${currentRepo}`)
    console.log(data)
    if(data.id){
      const isExist = repos.find(repo => repo.id === data.id);
      if(!isExist){
        setRepos(prev => [...prev,data]);
        setcurrentRepo('');
        return
      }
      
    } else{
      alert('Repositório não encontrado');
    }
    
  }

  const handleRemoveRepo = (id) =>{
    console.log('removendo registro', id)
    setRepos(repos.filter((repo) => {
      return repo.id !== id;
    })) 

  }


  return (
    <Container>
       <img src={logoGit} width={72} height={72} alt="logo-github"/>
       <Input value={currentRepo} onChange={(e) =>setcurrentRepo(e.target.value)}/>
       <Button onClicK={handleSearchRepo}/>
       {repos.map(repo=> <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
       
    
    </Container>
  );
}

export default App;
