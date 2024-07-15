import { Controller, Get } from '@nestjs/common';

@Controller('armies')
export class ArmiesController {
    
    @Get()
    getArmies(){
        return []
    }
}

