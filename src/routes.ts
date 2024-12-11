import { Router, Request, Response } from "express";

export const router = Router();
router.get("/teste", (req: Request, res: Response) => {
  try {
    res.status(200).json({ message: "Rota funcionando!" });
  } catch {
    res.status(500).json({ message: "Erro ao fazer requisição!" });
  }
});