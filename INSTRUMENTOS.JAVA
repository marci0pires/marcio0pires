package com.TDS;

import java.util.Scanner;

public class InstrumentoMusical {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Quantos instrumentos deseja cadastrar? ");
        int quantidade = scanner.nextInt();
        scanner.nextLine(); // consumir a quebra de linha

        String[] nomes = new String[quantidade];
        String[] tipos = new String[quantidade];
        String[] origens = new String[quantidade];

        for (int i = 0; i < quantidade; i++) {
            System.out.println("\nCadastro do instrumento " + (i + 1) + ":");

            System.out.print("Nome: ");
            nomes[i] = scanner.nextLine();

            System.out.print("Tipo (corda, sopro, percussão, etc): ");
            tipos[i] = scanner.nextLine();

            System.out.print("Origem: ");
            origens[i] = scanner.nextLine();
        }

        System.out.println("\n=== Lista de Instrumentos Cadastrados ===");
        for (int i = 0; i < quantidade; i++) {
            System.out.println("\nInstrumento " + (i + 1) + ":");
            System.out.println("Nome: " + nomes[i]);
            System.out.println("Tipo: " + tipos[i]);
            System.out.println("Origem: " + origens[i]);
        }

        scanner.close();
    }
}
