import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../service/authentification.service';

@Component({
  selector: 'app-listeusers',
  templateUrl: './listeusers.component.html',
  styleUrls: ['./listeusers.component.css']
})
export class ListeusersComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: AuthentificationService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des utilisateurs', error);
      }
    );
  }

  onDeleteUser(userId: string): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
      this.userService.deleteUser(userId).subscribe(() => {
        alert('Utilisateur supprimé avec succès');
        this.fetchUsers(); // Update the list after deletion
      }, error => {
        console.error('Erreur lors de la suppression de l\'utilisateur', error);
        alert('Une erreur est survenue lors de la suppression.');
      });
    }
  }
}
