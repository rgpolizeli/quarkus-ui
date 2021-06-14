export class OrdemServico {
	constructor(
		public data: string,
		public pacienteId: number, 
		public convenio: string,
		public postoColetaId: number,
		public medicoId: number,
		public examesIds: Array<number>
		){}
}

export class Protocolo {
	constructor(
	public id: number,
	public dataEntrega: string
	){}
}

export class ServerError {
	constructor(
	public code: number,
	public message: string
	){}
}

export class UnknownError extends ServerError{
	constructor(){
		super(520, "Oops! Algo deu errado. Tente novamente ou contate o admnistrador.");
	}
}

export class InvalidPostoColetaError extends ServerError{
	constructor(){
		super(520, "Posto de Coleta inválido!");
	}
}

export class InvalidCPFError extends ServerError{
	constructor(){
		super(524, "Paciente não encontrado!");
	}
}

export class InvalidCRMError extends ServerError{
	constructor(){
		super(525, "Médico não encontrado!");
	}
}

export class InvalidExameError extends ServerError{
	constructor(){
		super(526, "Exame não encontrado!");
	}
}

export class InvalidConvenioError extends ServerError{
	constructor(){
		super(528, "Convênio inválido!");
	}
}