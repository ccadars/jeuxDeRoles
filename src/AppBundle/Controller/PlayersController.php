<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\BrowserKit\Request;

/**
 * Description of PlayersController
 *
 * @author lunel10
 */
class PlayersController extends Controller {
    /**
     * Methode qui va ajouter les joueurs en base de données
     * à la fin du traitement on est redirigier sur le controller
     * afin de retourner la vue de création de personages
     * @Route("/players/add",name="addPlayers")
     * @param \Request $r
     */
    public function addPlayers(Request $r){
        
        return $this->redirectionToRoute('createPerso');
//        m'a permis de verifier les valeurs du formulaire
//        return new Response ($r->get('j1'));
    }
    
}
