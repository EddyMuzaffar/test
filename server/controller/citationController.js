// Contrôleur pour la route '/api/users'
const citationController = {
    getAllUsers: async (req, res) => {
        try {
            // Récupérer tous les utilisateurs depuis la base de données
            const users = await User.findAll();

            // Envoyer les utilisateurs en tant que réponse
            res.json(users);
        } catch (error) {
            console.error('Erreur lors de la récupération des utilisateurs :', error);
            res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs.' });
        }
    },
};

module.exports = citationController;